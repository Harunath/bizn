import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { countryId, states } = body;

		if (!countryId || !Array.isArray(states)) {
			return NextResponse.json(
				{ message: "Invalid request body" },
				{ status: 400 }
			);
		}

		const formattedStates = states.map((state: any) => ({
			name: state.name,
			code: state.code || null,
			countryId,
		}));

		await prisma.state.createMany({
			data: formattedStates,
			skipDuplicates: true,
		});

		return NextResponse.json(
			{ message: "States created successfully" },
			{ status: 201 }
		);
	} catch (error: any) {
		console.error("Error creating states:", error);
		return NextResponse.json(
			{ message: "Something went wrong", error: error.message },
			{ status: 500 }
		);
	}
};
