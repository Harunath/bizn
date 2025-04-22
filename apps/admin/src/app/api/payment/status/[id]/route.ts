import { NextRequest, NextResponse } from "next/server";
import { Decimal } from "@prisma/client/runtime/library";
import prisma, { AdminRole, OrderStatus } from "@repo/db/client";

const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY!;
const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID!;
const CASHFREE_BASE_URL = "https://sandbox.cashfree.com/pg/orders";

const apiRedirect = {
	[AdminRole.MASTER_ADMIN]: "/api/upgrade/master-admin",
	[AdminRole.SUPER_ADMIN]: "/api/upgrade/super-admin",
	[AdminRole.REGIONAL_ADMIN]: "/api/upgrade/regional-admin",
};

const update = async (orderid: string, orderStatus: OrderStatus) => {
	const updateOrder = await prisma.order.update({
		where: { id: orderid },
		data: { status: orderStatus },
		select: {
			orderItems: true,
		},
	});

	if (!updateOrder.orderItems[0]?.itemDetailsSnapshot)
		return { error: "Order items not found" };
	const itemDetailsSnapshot = updateOrder.orderItems[0].itemDetailsSnapshot as {
		parentAdminId: string;
		role: AdminRole;
		adminId: string;
	};
	console.log(itemDetailsSnapshot);
	const parentAdminId = itemDetailsSnapshot.parentAdminId;
	const role = itemDetailsSnapshot.role;
	const adminId = itemDetailsSnapshot.adminId;
	console.log(parentAdminId);
	return { parentAdminId, role, adminId };
};

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const orderId = await params;
	const cashfreeOrderId = orderId.id;
	if (!cashfreeOrderId) {
		return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
	}

	// 1. Check if payment is already updated in DB
	const existingPayment = await prisma.payment.findUnique({
		where: { cashfreeOrderId },
	});

	if (existingPayment && existingPayment.status === "SUCCESS") {
		const data = await update(existingPayment.orderId, "PAID");
		if (data.error) return NextResponse.json({ status: "FAILED" });
		if (data.parentAdminId && data.role && data.adminId) {
			const res = fetch(
				`${
					process.env.NEXTAUTH_URL +
					apiRedirect[
						data.role as "MASTER_ADMIN" | "SUPER_ADMIN" | "REGIONAL_ADMIN"
					]
				}`,
				{
					method: "POST",
					body: JSON.stringify({
						parentAdminId: data.parentAdminId,
						adminId: data.adminId,
					}),
				}
			);
			return NextResponse.json({
				status: "SUCCESS",
				parentAdminId: data.parentAdminId,
				role: data.role,
			});
		}
	} else if (existingPayment && existingPayment.status === "FAILED") {
		return NextResponse.json({ status: "FAILED" });
	}

	// 2. Fetch from Cashfree if webhook hasn't updated DB yet
	try {
		const res = await fetch(`${CASHFREE_BASE_URL}/${cashfreeOrderId}`, {
			method: "GET",
			headers: {
				"x-api-version": "2022-09-01",
				"x-client-id": CASHFREE_APP_ID,
				"x-client-secret": CASHFREE_SECRET_KEY,
			},
		});

		const data = await res.json();

		if (!res.ok || data.order_status === "ACTIVE") {
			return NextResponse.json({ status: "PROCESSING" });
		}

		// 3. Prepare mapped values
		const {
			order_status,
			order_id,
			payment_session_id,
			order_amount,
			order_currency,
		} = data;

		// 4. Map Cashfree status to our enums
		let paymentStatus: "SUCCESS" | "FAILED" | "PENDING" = "PENDING";
		let orderStatus: "PAID" | "FAILED" | "PROCESSING" = "PROCESSING";

		if (order_status === "PAID") {
			paymentStatus = "SUCCESS";
			orderStatus = "PAID";
		} else if (order_status === "EXPIRED" || order_status === "CANCELLED") {
			paymentStatus = "FAILED";
			orderStatus = "FAILED";
		}

		// 5. Get related Order
		const order = await prisma.order.findUnique({
			where: { cashfreeOrderId: order_id },
		});

		if (!order) {
			return NextResponse.json({ error: "Order not found" }, { status: 404 });
		}

		// 6. Upsert payment
		await prisma.payment.upsert({
			where: { cashfreeOrderId: order_id },
			update: {
				status: paymentStatus,
				gatewayResponse: data,
				processedAt: new Date(),
			},
			create: {
				cashfreeOrderId: order_id,
				paymentSessionId: payment_session_id,
				orderId: order.id,
				amount: new Decimal(order_amount),
				currency: order_currency,
				gatewayResponse: data,
				status: paymentStatus,
				processedAt: new Date(),
			},
		});

		// 7. Update order status
		const updateData = await update(order.id, orderStatus);
		if (updateData.error) return NextResponse.json({ status: "FAILED" });
		if (updateData.parentAdminId && updateData.role && updateData.adminId) {
			const res = await fetch(
				apiRedirect[
					updateData.role as "MASTER_ADMIN" | "SUPER_ADMIN" | "REGIONAL_ADMIN"
				],
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						parentAdminId: data.parentAdminId,
						adminId: updateData.adminId,
					}),
				}
			);
			return NextResponse.json({
				status: paymentStatus === "SUCCESS" ? "SUCCESS" : "FAILED",
				parentAdminId: updateData.parentAdminId,
			});
		}
	} catch (error) {
		console.error("Error polling Cashfree:", error);
		return NextResponse.json({ status: "PROCESSING" }); // fallback
	}
}
