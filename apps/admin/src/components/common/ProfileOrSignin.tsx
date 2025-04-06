"use client";
import React from "react";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import Link from "next/link";
import { AdminRole } from "@prisma/client";

const ProfileOrSignin = () => {
	const rolePaths: Record<AdminRole, string> = {
		ADMIN: "/admin/profile",
		MASTER_ADMIN: "/master-franchise/profile",
		SUPER_ADMIN: "/super-franchise/profile",
		REGIONAL_ADMIN: "/regional-franchise/profile",
		GUEST: "/guest/profile",
	};
	const session = useSession();
	return (
		<div>
			{session.data?.user.id ? (
				<Link href={rolePaths[session.data.user.role] || "/login"}>
					<button className="px-4 py-1 text-white bg-red-600 rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600">
						{session.data.user.firstname} Profile
					</button>
				</Link>
			) : (
				<SignInButton>
					<button className="px-4 py-1 text-white bg-red-600 rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600">
						Login
					</button>
				</SignInButton>
			)}
		</div>
	);
};

export default ProfileOrSignin;
