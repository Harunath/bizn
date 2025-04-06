import prisma, { AdminRole } from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const admins = await prisma.administrator.findMany({
			where: {
				role: AdminRole.MASTER_ADMIN,
			},
			select: {
				id: true,
				firstname: true,
				lastname: true,
				masterFranchises: {
					select: {
						id: true,
						name: true,
						
					},
				},
			},
		});
		return NextResponse.json({ message: "sucess", admins });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};
