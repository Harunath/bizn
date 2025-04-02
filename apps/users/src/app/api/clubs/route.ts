import { NextResponse } from "next/server";
import prisma from "@repo/db/client"; // Adjust based on your project structure

export const GET = async () => {
	try {
		const clubs = await prisma.club.findMany();
		return NextResponse.json(clubs);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
};
