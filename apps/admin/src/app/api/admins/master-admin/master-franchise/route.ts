import prisma, { AdminRole } from "@repo/db/client";
import { authOptions } from "../../../../../lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		console.log("master franchise route");
		const body = await request.json();
		const { countryids, name } = body;
		if (!countryids || !name) {
			return new Response("Invalid request", { status: 400 });
		}
		const countries = await prisma.country.findMany({
			where: {
				id: { in: countryids },
			},
		});
		if (countries.length !== countryids.length) {
			return NextResponse.json(
				{ message: "One or more country IDs are invalid" },
				{ status: 400 }
			);
		}
		const session = await getServerSession(authOptions);
		if (!session?.user.id) {
			return NextResponse.json(
				{ message: "user is not logged in" },
				{ status: 403 }
			);
		}
		const adminId = session.user.id;
		if (session.user.role !== AdminRole.MASTER_ADMIN) {
			return NextResponse.json({ message: "Forbidden" }, { status: 403 });
		}
		if (!session.user.parentAdminId) {
			return NextResponse.json(
				{ message: "Parent admin does not exist" },
				{ status: 403 }
			);
		}

		const masterFranchise = await prisma.masterFranchise.create({
			data: {
				name,
				adminId,
				countries: {
					connect: countryids.map((id: string) => ({ id })),
				},
			},
		});

		return NextResponse.json(
			{
				message: "success",
				masterFranchise,
			},
			{ status: 201 }
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" }, { status: 500 });
	}
};
