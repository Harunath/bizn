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
		try {
			const res = await fetch("/api/franchise/master-franchise", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setMasterFranchise(data.franchises);
			console.log(data);
		} catch (error) {
			console.error("Error fetching master franchises:", error);
		}
	};

	return (
		<div className="mt-8">
			<h1 className="text-2xl font-bold text-gray-800 mb-4">
				Master Franchises
			</h1>

			{masterFranchise.length > 0 ? (
				<div className="grid gap-4">
					{masterFranchise.map((franchise) => (
						<div
							key={franchise.id}
							className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
							<h2 className="text-lg font-semibold text-purple-700 mb-2">
								{franchise.name}
							</h2>
							<p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
								<span className="font-medium">Countries:</span>{" "}
								{franchise.countries.join(", ") || "N/A"}
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								<span className="font-medium">Admin:</span>{" "}
								{franchise.admin.firstname} {franchise.admin.lastname}
							</p>
						</div>
					))}
				</div>
			) : (
				<p className="text-gray-500 italic">
					Currently there are no master franchises.
				</p>
			)}
		</div>
	);
};

export default GetMasterFranchise;
