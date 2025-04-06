import prisma, { AdminRole } from "@repo/db/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { email, phone, password, firstname, lastname, otp, token } = body;
		console.log(
			email,
			phone,
			password,
			firstname,
			lastname,
			otp,
			token,
			"data"
		);
		if (otp) {
			const res = await fetch("http://localhost:3001/api/auth/verify-otp", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, otp, token, password }),
			});
			const data = await res.json();
			if (data.success) {
				if (!email && !phone && !password && !firstname && !lastname) {
					return NextResponse.json({
						success: false,
						message: "All fields are required!",
					});
				}
				const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
				const admin = await prisma.administrator.create({
					data: {
						email,
						emailVerified: true,
						phone,
						password: hashedPassword,
						firstname,
						lastname,
						role: AdminRole.GUEST,
						roleStartDate: new Date(),
						roleEndDate: new Date(
							new Date().setFullYear(new Date().getFullYear() + 1)
						),
					},
				});
				if (admin.id)
					return NextResponse.json({
						success: true,
						message: "Successfully created admin",
					});
				else {
					return NextResponse.json({
						success: false,
						message: "Something went wrong!",
					});
				}
			}
		}
	} catch (error) {
		console.error("Error verifying email:", error);
		return NextResponse.json({
			success: false,
			error: "OTP expired or invalid!",
		});
	}
};
