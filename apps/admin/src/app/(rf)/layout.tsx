import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth"; // Your NextAuth config
import WithRole from "../../hoc/WithRole";
import { AdminRole } from "@prisma/client";
import Navbar from "../../components/common/NavBar";

export default async function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const session = await getServerSession(authOptions); // Fetch session on the server
	const links = [
		{ name: "Dashboard", href: "/regional-franchise/dashboard" },
		{ name: "profile", href: "/regional-franchise/profile" },
	];
	return (
		<WithRole allowedRole={AdminRole.REGIONAL_ADMIN} session={session}>
			<div className=" w-screen">
				<Navbar links={links} />
				<div className="pt-16 px-2">{children}</div>
			</div>
		</WithRole>
	);
}
