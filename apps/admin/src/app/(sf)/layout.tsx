import { authOptions } from "../../lib/auth"; // Your NextAuth config
import WithRole from "../../hoc/WithRole";
import { AdminRole } from "@prisma/client";
import Navbar from "../../components/common/NavBar";
import { getServerSession } from "next-auth";
export default async function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const session = await getServerSession(authOptions); // Fetch session on the server
	console.log(session);
	const links = [
		{ name: "Dashboard", href: "/super-franchise/dashboard" },
		{ name: "profile", href: "/super-franchise/profile" },
	];
	return (
		<WithRole allowedRole={AdminRole.SUPER_ADMIN} session={session}>
			<div className=" w-screen">
				<Navbar links={links} />
				<div className="pt-16 px-2">{children}</div>
			</div>
		</WithRole>
	);
}
