"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Session } from "next-auth";
import { AdminRole } from "@prisma/client";

interface WithRoleProps {
	allowedRole: AdminRole;
	children: ReactNode;
	session: Session | null; // Accept session as a prop
}

const WithRole = ({ allowedRole, children, session }: WithRoleProps) => {
	const router = useRouter();

	useEffect(() => {
		if (!session || session.user.role !== allowedRole) {
			console.log(session?.user.role);
			router.replace("/unauthorized"); // Redirect unauthorized users
		}
	}, [session, router, allowedRole]);

	if (!session) {
		return <p>Loading...</p>;
	}

	return <>{children}</>;
};

export default WithRole;
