import prisma, { AdminRole } from "@repo/db/client";
import { authOptions } from "../../../../../lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		const { stateid, name } = body;
		if (!stateid || !name) {
			return NextResponse.json({ message: "invalid state or name " });
		}
		const state = await prisma.state.findFirst({
			where: { id: stateid },
		});
		if (!state) {
			return NextResponse.json({ message: "invalid state" }, { status: 400 });
		}
		const session = await getServerSession(authOptions);
		if (!session?.user.id) {
			return NextResponse.json({ message: "failed" });
		}
		const adminId = session.user.id;
		const admin = await prisma.administrator.findFirst({
			where: { id: adminId },

			select: {
				role: true,
				parentAdminId: true,
				parentAdmin: {
					select: {
						id: true,
						superFranchises: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
				id: true,
			},
		});
		if (admin?.role !== AdminRole.SUPER_ADMIN) {
			return NextResponse.json({ message: "failed" });
		}
		if (!admin.parentAdminId || !admin.parentAdmin?.superFranchises[0]?.id) {
			return NextResponse.json({ message: "failed" });
		}

		const masterFranchises = await prisma.regionalFranchise.create({
			data: {
				stateId: stateid,
				name,
				adminId,
				superFranchiseId: admin?.parentAdmin?.superFranchises[0]?.id,
			},
		});
		return NextResponse.json({
			message: "success",
			masterFranchise: masterFranchises,
		});
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};
