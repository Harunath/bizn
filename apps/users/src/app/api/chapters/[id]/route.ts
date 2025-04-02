import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/client"; // Assuming this path is correct for your monorepo setup
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;
		// --- Your API Logic ---
		console.log(`Workspaceing data for chapter ID: ${id}`);

		// Example using Prisma (make sure your model name matches 'chapter')
		const chapter = await prisma.chapter.findUnique({
			where: {
				id: id, // Use the dynamic id from the route
			},
		});

		if (!chapter) {
			return NextResponse.json(
				{ message: "Chapter not found" },
				{ status: 404 }
			);
		}

		// Return the found chapter
		return NextResponse.json(chapter);
		// --- End of Your API Logic ---
	} catch (error) {
		console.error("Error in GET /api/chapters/[id]:", error);
		// Return a generic server error response
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
