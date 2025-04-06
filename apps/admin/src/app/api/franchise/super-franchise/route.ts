import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { countryid } = body;
		const superFranchise = await prisma.superFranchise.findMany({
			where: {
				countryId: countryid,
			},
			select: {
				id: true,
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
				adminId: true,
			},
		});
		if (!superFranchise || superFranchise.length == 0) {
			return NextResponse.json({
				message: "no franchise",
				franchises: [],
			});
		}
		return NextResponse.json({
			message: "sucess",
			franchises: superFranchise,
		});
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};
