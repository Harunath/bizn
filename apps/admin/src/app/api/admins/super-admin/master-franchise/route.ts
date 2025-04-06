import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";
import { NextResponse } from "next/server";
import prisma, { AdminRole } from "@repo/db/client";

export const GET = async () => {
	try {
		const session = await getServerSession(authOptions);
		if (
			!session?.user.id ||
			!session?.user.parentAdminId ||
			session.user.role !== AdminRole.SUPER_ADMIN
		) {
			return NextResponse.json({ message: "unauthorized" }, { status: 403 });
		}
		const adminId = session?.user.parentAdminId as string;
		const masterFranchise = await prisma.masterFranchise.findFirst({
			where: { adminId },
			select: {
				id: true,
				name: true,
				countries: true,
			},
		});
		return NextResponse.json(
			{ message: "success", masterFranchise },
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
