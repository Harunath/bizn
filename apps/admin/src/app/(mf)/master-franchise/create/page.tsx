import React from "react";
import CreateMasterFranchiseForm from "../../../../components/admins/master-admin/CreateMasterFranchiseForm";

const page = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Create Master Franchise</h1>
			<p className="text-gray-600 mb-4">
				Fill in the details below to create a new master franchise.
			</p>
			<CreateMasterFranchiseForm />
		</div>
	);
};

export default page;
