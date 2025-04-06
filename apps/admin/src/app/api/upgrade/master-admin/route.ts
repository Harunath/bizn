import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { AdminRole } from "@prisma/client";
import prisma from "@repo/db/client";
import { authOptions } from "../../../../lib/auth";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { parentAdminId } = body;
		const session = await getServerSession(authOptions);
		if (!session?.user.id && session?.user.role != AdminRole.GUEST) {
			return NextResponse.json({ message: "failed" }, { status: 403 });
		}
		// parent admin check
		const parentAdmin = await prisma.administrator.findUniqueOrThrow({
			where: {
				id: parentAdminId,
			},
			select: {
				role: true,
			},
		});
		if (parentAdmin.role !== AdminRole.ADMIN) {
			return NextResponse.json(
				{
					message: "Parent admin is not a main Admin",
				},
				{ status: 403 }
			);
		}
		// upgrading
		const master_admin = await prisma.administrator.update({
			where: {
				id: session?.user.id,
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
		console.log(e);
		return NextResponse.json({ message: "failed" }, { status: 500 });
	}
};
