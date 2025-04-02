"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { UserMembershipType } from "@repo/db/client";
import { Session } from "next-auth";

interface WithMembershipTypeProps {
	allowedMembership: UserMembershipType;
	children: ReactNode;
	session: Session | null; // Accept session as a prop
}

const WithMembershipType = ({
	allowedMembership,
	children,
	session,
}: WithMembershipTypeProps) => {
	const router = useRouter();

	useEffect(() => {
		if (!session || session.user.membershipType !== allowedMembership) {
			router.replace("/unauthorized"); // Redirect unauthorized users
		}
	}, [session, router, allowedMembership]);

	if (!session) {
		return <p>Loading...</p>; // Prevent flash of unauthorized content
	}

	return <>{children}</>;
};

export default WithMembershipType;
