import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/client";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;
		const club = await prisma.club.findUnique({
			where: { id },
		});

		if (!club) {
			return NextResponse.json({ error: "Club not found" }, { status: 404 });
		}

		return NextResponse.json(club);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
