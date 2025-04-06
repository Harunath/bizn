"use client";

import { useEffect, useState } from "react";

interface MasterFranchiseType {
	id: string;
	name: string;
	countries: string[];
	adminId: string;
	admin: {
		id: string;
		firstname: string;
		lastname: string;
	};
}

const GetMasterFranchise = () => {
	const [masterFranchise, setMasterFranchise] = useState<MasterFranchiseType[]>(
		[]
	);
	useEffect(() => {
		getMasterFranchise();
	}, []);
	const getMasterFranchise = async () => {
		const res = await fetch("/api/franchise/master-franchise", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		setMasterFranchise(data.franchises);
		console.log(data);
	};
	return (
		<div>
			<h1>Get Master Franchise</h1>
			<p>Check the console for the response.</p>
			{masterFranchise.length > 0 &&
				masterFranchise.map((franchise: MasterFranchiseType) => (
					<div key={franchise.id}>
						<h2>{franchise.name}</h2>
						<p>Countries: {franchise.countries.join(", ")}</p>
						<p>
							Admin: {franchise.admin.firstname} {franchise.admin.lastname}
						</p>
					</div>
				))}
		</div>
	);
};

export default GetMasterFranchise;
