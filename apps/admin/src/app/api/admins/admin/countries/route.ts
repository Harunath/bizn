import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { name, isoCode, phoneCode } = body;

		if (!name || !isoCode || !phoneCode) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}
		const country = await prisma.country.create({
			data: {
				name,
				isoCode,
				phoneCode,
			},
		});
		return NextResponse.json(
			{ message: "Country created successfully", country },
			{ status: 201 }
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Error creating country" },
			{ status: 500 }
		);
	}
};
