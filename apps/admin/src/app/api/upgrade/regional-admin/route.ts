import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { AdminRole } from "@prisma/client";
import prisma from "@repo/db/client";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { parentAdminId } = body;
		const session = await getServerSession();
		if (session?.user.id && session.user.role != AdminRole.GUEST) {
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
		if (parentAdmin.role !== AdminRole.SUPER_ADMIN) {
			return NextResponse.json(
				{
					message: "Parent admin is not a super franchise admin",
				},
				{ status: 403 }
			);
		}
		// upgrading
		const regional_admin = await prisma.administrator.update({
			where: {
				id: session?.user.id,
			},
			data: {
				parentAdminId: parentAdminId,
				role: AdminRole.REGIONAL_ADMIN,
				roleStartDate: new Date(),
				roleEndDate: new Date(
					new Date().setFullYear(new Date().getFullYear() + 1)
				),
			},
			select: {
				id: true,
				firstname: true,
				lastname: true,
				parentAdminId: true,
				parentAdmin: {
					select: {
						id: true,
						firstname: true,
						lastname: true,
					},
				},
				role: true,
				roleStartDate: true,
				roleEndDate: true,
			},
		});
		return NextResponse.json(
			{ message: "success", regional_admin },
			{ status: 201 }
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" }, { status: 500 });
	}
};
