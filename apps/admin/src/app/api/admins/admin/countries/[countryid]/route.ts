import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const POST = async (
	request: Request,
	{ params }: { params: Promise<{ countryid: string }> }
) => {
	try {
		const { countryid } = await params;
		const country = await prisma.country.findFirst({
			where: { id: countryid },
		});
		if (!country) {
			return new Response(JSON.stringify({ message: "Country not found" }), {
				status: 404,
			});
		}
		const body = await request.json();
		const { name } = body;
		const newCountry = await prisma.country.update({
			where: { id: countryid },
			data: {
				name: name,
			},
		});
		return NextResponse.json({ message: "success", country: newCountry });
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Error creating state" },
			{ status: 500 }
		);
	}
};
