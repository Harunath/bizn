import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth"; // Import your NextAuth config
import WithMembershipType from "../../hoc/WithMembershipType";
import { UserMembershipType } from "@repo/db/client";

export default async function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const session = await getServerSession(authOptions); // Fetch session on the server

	return (
		<WithMembershipType
			allowedMembership={UserMembershipType.ONE_CLUB}
			session={session}>
			{children}
		</WithMembershipType>
	);
}
