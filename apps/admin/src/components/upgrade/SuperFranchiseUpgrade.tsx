"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AdminRole, Country } from "@repo/db/client";
import { toast } from "react-toastify";
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

const SuperFranchiseUpgrade = () => {
	const router = useRouter();
	const [masterFranchise, setMasterFranchise] = useState<MasterFranchiseType[]>(
		[]
	);
	const [countryid, setCountryid] = useState("");
	const [countries, setCountries] = useState<Country[] | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [selectedMasterFranchise, setSelectedMasterFranchise] = useState<
		string | null
	>(null);

	const { update, data: session } = useSession();

	useEffect(() => {
		if (!countries) {
			const fetchCountries = async () => {
				try {
					const response = await fetch("/api/countries");
					const data = await response.json();
					setCountries(data.countries);
				} catch (error) {
					setError("Failed to fetch countries");
				}
			};
			fetchCountries();
		}
		fetchMasterFranchises();
	}, [countryid]);

	const fetchMasterFranchises = async () => {
		try {
			const response = await fetch("/api/franchise/master-franchise", {
				method: "POST",
				body: JSON.stringify({ countryid }),
			});
			const data = await response.json();
			if (data.franchises.length > 0) {
				console.log("master franchise data", data.franchises);
				setMasterFranchise(data.franchises);
				setError(null);
			} else if (data.franchises.length === 0) {
				setMasterFranchise([]);
				setError("No master franchises available for the selected country.");
			} else {
				setError("Failed to fetch master franchises. Please try again.");
				console.error(data.message);
			}
		} catch (error) {
			console.error("Fetch error: ", error);
			alert("An error occurred. Please try again.");
		}
	};

	const handleUpgrade = async () => {
		if (!masterFranchise || !countryid) {
			setError("Please select a master franchise and country.");
			// alert("Please select a master franchise and country.");
			return;
		}

		setLoading(true);
		try {
			const response = await fetch("/api/upgrade/super-admin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ parentAdminId: selectedMasterFranchise }),
			});

			const data = await response.json();
			console.log(data);
			if (data.message == "success") {
				// Update NextAuth session with new role
				console.log("inside");
				await update({ role: AdminRole.SUPER_ADMIN });
				toast.success(
					`${data.super_admin.firstname + " " + data.super_admin.lastname} is upgraded to Super Franchise admin!`
				);
				router.push("/super-franchise/dashboard");
			} else {
				setError("Upgrade failed. Please try again.");
				// alert("Upgrade failed. Please try again.");
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
			console.error("Upgrade error: ", error);
			// alert("An error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
			<h2 className="text-3xl font-bold text-red-600 mb-4">
				Upgrade to Super Franchise
			</h2>
			<p className="text-gray-700 mb-6">
				Select a master franchise and country to proceed.
			</p>

			<select
				className="border p-2 mb-4"
				value={countryid}
				onChange={(e) => setCountryid(e.target.value)}>
				<option value="">Select Country</option>
				{countries &&
					countries.length > 0 &&
					countries.map((country) => (
						<option key={country.id} value={country.id}>
							{country.name}
						</option>
					))}
			</select>
			<select
				className="border p-2 mb-4"
				value={selectedMasterFranchise || ""}
				disabled={!countryid}
				onChange={(e) => setSelectedMasterFranchise(e.target.value)}>
				<option value="">Select Master Franchise</option>
				{masterFranchise.length > 0 &&
					masterFranchise.map((franchise: MasterFranchiseType) => (
						<option key={franchise.id} value={franchise.adminId}>
							{franchise.name}
						</option>
					))}
			</select>

			<button
				onClick={handleUpgrade}
				disabled={loading}
				className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400">
				{loading ? "Processing..." : "Upgrade Now"}
			</button>
			{error && <div className="text-red-500 mt-4">{error}</div>}
		</div>
	);
};

export default SuperFranchiseUpgrade;
