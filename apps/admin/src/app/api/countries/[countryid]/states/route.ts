import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async (
	request: Request,
	{ params }: { params: Promise<{ countryid: string }> }
) => {
	try {
		const { countryid } = await params;
		const states = await prisma.state.findMany({
			where: {
				countryId: countryid,
			},
		});
		if (states.length == 0) {
			return NextResponse.json({ message: "no states" }, { status: 404 });
		}
		return NextResponse.json({ message: "success", states }, { status: 200 });
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "failed to fetch countries" },
			{ status: 500 }
		);
	}
};
