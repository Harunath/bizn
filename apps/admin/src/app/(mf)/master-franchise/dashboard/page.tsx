import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			<h2 className=" text-3xl text-red-500">master-franchise dashboard</h2>
			<Link
				className="text-center text-blue-400 bg-red-300 rounded-full px-4 py-2"
				href="/master-franchise/create">
				Create
			</Link>
		</div>
	);
};

export default page;
