import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { stateid } = body;
		const regionalFranchise = await prisma.regionalFranchise.findMany({
			where: {
				stateId: stateid,
			},
			select: {
				id: true,
				name: true,
				state: true,
				superFranchise: {
					select: {
						name: true,
						country: true,
						admin: {
							select: {
								id: true,
								firstname: true,
								lastname: true,
								role: true,
							},
						},
					},
				},
				superFranchiseId: true,

				admin: {
					select: {
						id: true,
						firstname: true,
						lastname: true,
						role: true,
					},
				},
				adminId: true,
			},
		});
		if (!regionalFranchise || regionalFranchise.length == 0) {
			return NextResponse.json({
				message: "no franchise",
				franchises: [],
			});
		}
		return NextResponse.json({
			message: "sucess",
			franchises: regionalFranchise,
		});
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};
