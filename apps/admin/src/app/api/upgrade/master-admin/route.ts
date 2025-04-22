import { NextResponse } from "next/server";
import { AdminRole } from "@prisma/client";
import prisma from "@repo/db/client";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { parentAdminId, adminId } = body;

		// parent admin check
		if (!parentAdminId || !adminId)
			return NextResponse.json(
				{ message: "parentAdminId not found or adminId not found" },
				{ status: 403 }
			);
		const parentAdmin = await prisma.administrator.findUnique({
			where: {
				id: parentAdminId,
			},
			select: {
				role: true,
			},
		});
		if (!parentAdmin || parentAdmin?.role !== AdminRole.ADMIN)
			return NextResponse.json(
				{ message: "parent admin not found or not an admin" },
				{ status: 403 }
			);
		const master_admin = await prisma.administrator.update({
			where: {
				id: adminId,
			},
			data: {
				role: AdminRole.MASTER_ADMIN,
				parentAdminId,
				roleStartDate: new Date(),
				roleEndDate: new Date(
					new Date().setFullYear(new Date().getFullYear() + 1)
				),
			},
			select: {
				id: true,
				firstname: true,
				lastname: true,
				role: true,
				roleStartDate: true,
				roleEndDate: true,
			},
		});

		return NextResponse.json(
			{ message: "success", master_admin },
			{ status: 201 }
		);
	} catch (e) {
		return NextResponse.json({ message: "failed" }, { status: 500 });
	}
};
