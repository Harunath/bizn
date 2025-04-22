import { NextResponse } from "next/server";
import { createCashfreeOrder } from "@repo/payments/order";
import prisma, { AdminRole } from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";

interface CustomerDetails {
	customer_id: string; // Unique ID for the customer in your system
	customer_email: string;
	customer_phone: string;
	customer_name?: string; // Optional but recommended
}

// Input parameters expected by our createOrder function/endpoint
interface CreateOrderInput {
	order_amount: number;
	order_currency: string; // e.g., "INR"
	customer_details: CustomerDetails;
	return_url: string; // URL to redirect user back to after payment attempt
	order_note?: string; // Optional note
	// Add any other fields required by your application logic
}

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { parentAdminId } = body;
		const session = await getServerSession(authOptions);
		if (!session?.user.id && session?.user.role != AdminRole.GUEST) {
			return NextResponse.json({ message: "failed" }, { status: 403 });
		}
		// parent admin check

		const parentAdmin = await prisma.administrator.findUnique({
			where: {
				id: parentAdminId,
			},
			select: {
				id: true,
				role: true,
			},
		});
		if (!parentAdmin || parentAdmin.role !== AdminRole.ADMIN)
			return NextResponse.json(
				{
					message:
						"parent admin not found or Parent Admin is not the peoper admin",
				},
				{ status: 404 }
			);

		const admin = await prisma.administrator.findUnique({
			where: {
				id: session.user.id,
			},
		});
		if (!admin) {
			return NextResponse.json({ message: "admin not found" }, { status: 404 });
		}

		// order creating

		const input: CreateOrderInput = {
			order_amount: 1.11,
			order_currency: "INR", // e.g., "INR"
			return_url:
				"http://localhost:3001/guest/upgrade/master-franchise/payment/callback", // URL to redirect admin back to after payment attempt
			order_note: "upgrade to master ftanchise", // Optional note
			customer_details: {
				customer_id: admin?.id, // Unique ID for the customer in your system
				customer_email: admin?.email,
				customer_phone: admin?.phone,
				customer_name: admin?.firstname + admin?.lastname, // Optional but recommended
			},
		};
		const res = await createCashfreeOrder(input);
		if (res.success != true)
			return NextResponse.json({ message: "failed" }, { status: 400 });
		const order = await prisma.order.create({
			data: {
				cashfreeOrderId: res.order_id,
				paymentSessionId: res.payment_session_id,
				administratorId: admin.id,
				totalAmount: 1.11,
				currency: "INR",
				notes: "upgrading to a franchise",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		});
		if (!order.id)
			return NextResponse.json(
				{ error: "internal server error" },
				{ status: 500 }
			);
		const orderItems = await prisma.orderItem.create({
			data: {
				orderId: order.id,
				quantity: 1,
				pricePerUnit: 1.11,
				totalPrice: 1.11,
				itemDetailsSnapshot: {
					parentAdminId: parentAdmin.id,
					role: AdminRole.MASTER_ADMIN,
					adminId: session.user.id,
				},
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		});
		if (!orderItems.id)
			return NextResponse.json(
				{ error: "internal server error" },
				{ status: 500 }
			);
		console.log(orderItems, "orderItems");

		return NextResponse.json(
			{ message: "success", payment_session_id: res?.payment_session_id },
			{ status: 400 }
		);
	} catch (e) {
		console.error(e);
		return NextResponse.json(
			{ error: "internal server error" },
			{ status: 500 }
		);
	}
};
