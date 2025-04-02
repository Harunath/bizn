import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth"; // Your NextAuth config
import WithRole from "../../hoc/withRole";

export default async function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const session = await getServerSession(authOptions); // Fetch session on the server

	return (
		<WithRole allowedRole="leadingClubId" session={session}>
			{children}
		</WithRole>
	);
}
