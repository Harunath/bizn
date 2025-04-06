import prisma, { AdminRole } from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const admins = await prisma.administrator.findMany({
			where: {
				role: AdminRole.REGIONAL_ADMIN,
			},
		});
		return NextResponse.json({ message: "sucess", admins });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "failed" });
	}
};
