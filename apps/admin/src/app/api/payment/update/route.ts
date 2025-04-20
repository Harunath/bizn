import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/client";

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();
		console.log("Webhook received:", body);

		if (body.type === "PAYMENT_SUCCESS_WEBHOOK") {
			const paymentData = body.data.payment;
			const orderData = body.data.order;
			const paymentOffers = body.data.payment_offers;

			console.log("paymentOffers ", paymentOffers);

			// Update the Payment model
			const updatedPayment = await prisma.payment.update({
				where: {
					cashfreeOrderId: orderData.order_id, // Assuming you have this field in your Payment model
				},
				data: {
					status: paymentData.payment_status,
					amount: paymentData.payment_amount,
					currency: paymentData.payment_currency,
					paymentMethod: paymentData.payment_method,
					gatewayResponse: paymentData.payment_message,
					createdAt: new Date(paymentData.payment_time),
					updatedAt: new Date(),
				},
			});
			console.log("Updated Payment:", updatedPayment);

			// Update the Order model (you might want to update based on order_id)
			const updatedOrder = await prisma.order.update({
				where: {
					cashfreeOrderId: orderData.order_id, // Assuming you have this field in your Order model
				},
				data: {
					totalAmount: orderData.order_amount,
					// You might want to update an order status based on payment success
					status: paymentData.payment_status,
				},
			});
			console.log("Updated Order:", updatedOrder);
			return NextResponse.json({ received: true }, { status: 200 }); // Acknowledge receipt
		} else {
			console.log("Received an unhandled webhook type:", body.type);
			return NextResponse.json(
				{ error: "Unhandled event type" },
				{ status: 400 }
			);
		}
	} catch (error) {
		console.error("Error processing webhook:", error);
		return NextResponse.json(
			{ error: "Failed to process webhook" },
			{ status: 500 }
		);
	}
};
