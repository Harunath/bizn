import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const masterFranchises = await prisma.masterFranchise.findMany({
			select: {
				id: true,
				name: true,
				countries: true,
				adminId: true,
				admin: {
					select: {
						id: true,
						firstname: true,
						lastname: true,
					},
				},
			},
		});
		if (!masterFranchises || masterFranchises.length == 0) {
			return NextResponse.json({
				message: "no franchise",
				franchises: [],
			});
		}
		return NextResponse.json({
			message: "sucess",
			franchises: masterFranchises,
		});
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};

export const POST = async (request: Request) => {
	try {
		console.log("master franchise route");
		const body = await request.json();
		const { countryid } = body;
		const country = await prisma.country.findUnique({
			where: { id: countryid },
			select: {
				masterFranchises: true,
			},
		});

		if (!country) {
			return NextResponse.json({
				message: "no franchise",
				franchises: [],
			});
		}

		return NextResponse.json({
			message: "success",
			franchises: country.masterFranchises,
		});
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};
