import React from "react";
import CreateSuperFranchiseForm from "../../../../components/admins/super-admin/CreateSuperFranchiseForm";

const page = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Create Super Franchise</h1>
			<p className="text-gray-600 mb-4">
				Fill in the details below to create a new super franchise.
			</p>
			<CreateSuperFranchiseForm />
		</div>
	);
};

export default page;
