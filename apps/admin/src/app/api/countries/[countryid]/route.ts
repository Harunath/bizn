import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async (
	_request: Request,
	{ params }: { params: Promise<{ countryid: string }> }
) => {
	try {
		const { countryid } = await params;
		console.log(countryid);
		const states = await prisma.country.findUnique({
			where: { id: countryid },
			select: {
				states: true,
			},
		});
		if (!states) {
			return NextResponse.json(
				{ message: "states not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ message: "success", states }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error fetching states" },
			{ status: 500 }
		);
	}
};
