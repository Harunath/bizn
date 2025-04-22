import React from "react";
import GetMasterFranchise from "../../../../components/admins/admin/GetMasterFranchise";
import DisplayCountries from "../../../../components/admins/admin/DisplayCountries";
import Link from "next/link";

const page = () => {
	return (
		<div className="p-4 space-y-6">
			<div className="text-2xl font-bold">Admin Dashboard</div>

			<div>
				<Link href={"/admin/country"} className="text-blue-600 underline">
					Create Country
				</Link>
			</div>

			<GetMasterFranchise />

			<DisplayCountries />
		</div>
	);
};

export default page;
