import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async (
	_request: Request,
	{ params }: { params: Promise<{ countryid: string }> }
) => {
	try {
		const { countryid } = await params;

		const states = await prisma.state.findMany({
			where: { countryId: countryid },
			orderBy: { name: "asc" },
		});

		return NextResponse.json({ states }, { status: 200 });
	} catch (error) {
		console.error("Error fetching states:", error);
		return NextResponse.json(
			{ message: "Error fetching states" },
			{ status: 500 }
		);
	}
};
