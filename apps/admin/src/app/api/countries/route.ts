import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const countries = await prisma.country.findMany();
		if (countries.length == 0) {
			return NextResponse.json({ message: "no countries" }, { status: 404 });
		}
		return NextResponse.json(
			{ message: "success", countries },
			{ status: 200 }
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "failed to fetch countries" },
			{ status: 500 }
		);
	}
};
