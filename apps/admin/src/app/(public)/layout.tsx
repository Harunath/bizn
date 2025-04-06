import Navbar from "../../components/common/NavBar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const links = [{ name: "Home", href: "/" }];
	return (
		<div>
			<Navbar links={links} />
			{children}
		</div>
	);
}
