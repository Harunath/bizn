"use client";
import React from "react";
import GetMasterFranchise from "../../../../components/admins/admin/GetMasterFranchise";
import Link from "next/link";

const page = () => {
	return (
		<div>
			<div>Admin Dasboard</div>
			<div>
				<Link href={"/admin/country"}>Create Country</Link>
			</div>
			<GetMasterFranchise />
		</div>
	);
};

export default page;
