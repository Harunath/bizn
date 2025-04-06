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
			session.user.role !== AdminRole.REGIONAL_ADMIN
		) {
			return NextResponse.json({ message: "unauthorized" }, { status: 403 });
		}
		const adminId = session?.user.parentAdminId as string;
		const superFranchise = await prisma.superFranchise.findFirst({
			where: { adminId },
		});
		const states = await prisma.state.findMany({
			where: { countryId: superFranchise?.countryId },
		});
		if (states.length == 0) {
			return NextResponse.json({ message: "No states found" }, { status: 404 });
		}
		return NextResponse.json(
			{ message: "success", superFranchise, states },
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
