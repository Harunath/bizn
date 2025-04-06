import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			master-franchise dashboard
			<Link href="/master-franchise/dashboard/create">Create</Link>
		</div>
	);
};

export default page;
