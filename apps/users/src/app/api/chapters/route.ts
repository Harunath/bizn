import { NextResponse } from "next/server";
import prisma from "@repo/db/client"; // Adjust based on your project structure

export const GET = async () => {
	try {
		const chapters = await prisma.chapter.findMany();
		return NextResponse.json(chapters);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
};
