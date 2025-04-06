import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";
import { NextResponse } from "next/server";
import prisma, { AdminRole } from "@repo/db/client";

export const GET = async () => {
	try {
		const session = await getServerSession(authOptions);
		if (!session?.user.id && session?.user.parentAdminId) {
			return NextResponse.json(
				{ message: "no session Id or parent Id" },
				{ status: 403 }
			);
		}
		const parentAdmin = await prisma.administrator.findFirst({
			where: { id: session?.user.id },
			select: {
				id: true,
				firstname: true,
				lastname: true,
				role: true,
				masterFranchises: true,
			},
		});
		if (parentAdmin?.role !== AdminRole.MASTER_ADMIN) {
			return NextResponse.json(
				{ message: "parent admin role is not Master Admin" },
				{ status: 403 }
			);
		}
		return NextResponse.json(
			{ message: "success", parentAdmin },
			{ status: 200 }
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "failed - internal server error" },
			{ status: 500 }
		);
	}
};
