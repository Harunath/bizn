import prisma from "@repo/db/client";
import { authOptions } from "../../../../../lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { countryid, name } = body;
		if (!countryid || !name) {
			return NextResponse.json(
				{ message: "Invalid country or name" },
				{ status: 400 }
			);
		}
		const country = await prisma.country.findFirst({
			where: { id: countryid },
		});
		if (!country) {
			return NextResponse.json(
				{ message: "Country not found" },
				{ status: 404 }
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
		const admin = await prisma.administrator.findUniqueOrThrow({
			where: { id: adminId },
			select: {
				role: true,
				id: true,
				parentAdminId: true,
				parentAdmin: {
					select: {
						id: true,
						masterFranchises: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},
		});
		if (admin.role !== "SUPER_ADMIN") {
			return NextResponse.json({ message: "Forbidden" }, { status: 403 });
		}
		if (!admin.parentAdmin || !admin.parentAdmin.masterFranchises[0]?.id) {
			return NextResponse.json(
				{ message: "Parent admin does not exist" },
				{ status: 403 }
			);
		}

		const superFranchise = await prisma.superFranchise.create({
			data: {
				countryId: countryid,
				name,
				adminId,
				masterFranchiseId: admin?.parentAdmin.masterFranchises[0]?.id,
			},
		});
		return NextResponse.json(
			{
				message: "success",
				superFranchise: superFranchise,
			},
			{ status: 201 }
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" }, { status: 500 });
	}
};
