import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { name, code, countryid } = body;
		const country = await prisma.country.findFirst({
			where: { id: countryid },
		});
		if (!country) {
			return new Response(JSON.stringify({ message: "Country not found" }), {
				status: 404,
			});
		}

		if (!name || !code) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}

		const state = await prisma.state.create({
			data: {
				name,
				code: code,
				countryId: countryid,
			},
		});
		return NextResponse.json({ message: "success", state }, { status: 201 });
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Error creating state" },
			{ status: 500 }
		);
	}
};


