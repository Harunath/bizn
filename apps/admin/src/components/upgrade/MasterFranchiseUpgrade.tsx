"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AdminRole } from "@repo/db/client";
import { toast } from "react-toastify";

interface adminType {
	id: string;
	firstname: string;
	lastname: string;
}
const MasterFranchiseUpgrade = () => {
	const [admins, setAdmins] = useState<adminType[]>([]);
	const [error, setError] = useState("");
	const [selectedAdmin, setSelectedAdmin] = useState<string | null>(null);
	const { update, data: session } = useSession();

	useEffect(() => {
		const getAdmins = async () => {
			try {
				const res = await fetch("/api/admins/admin");
				const data = await res.json();
				setError("");
				setAdmins(data.admins);
			} catch (e) {
				console.log(e);
				setError("Failed to fetch admins");
			}
		};
		getAdmins();
	}, []);

	const router = useRouter();

	const handleUpgrade = async () => {
		// const sid = "your-session-id"; // Replace with actual session ID
		// const amount = 10000; // Set the amount for Master Franchise upgrade
		// const cashfreeUrl = `https://www.cashfree.com/pay?sid=${sid}&amount=${amount}`;

		// router.push(cashfreeUrl);
		try {
			console.log(selectedAdmin);
			const res = await fetch("/api/upgrade/master-admin", {
				method: "POST",
				body: JSON.stringify({ parentAdminId: selectedAdmin }),
			});
			const data = await res.json();

			if (data.message == "success") {
				// Update NextAuth session with new role
				await update({ role: AdminRole.MASTER_ADMIN });
				toast.success(
					`${data.master_admin.firstname + " " + data.master_admin.lastname} is upgraded to Master Franchise admin!`
				);
				// Redirect after session update
				router.push("/master-franchise");
			}
		} catch (e) {
			console.log(e);
			setError("failed to upgrade");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
			<h2 className="text-3xl font-bold text-red-600 mb-4">
				Upgrade to Master Franchise
			</h2>
			<p className="text-gray-700 mb-6">
				Gain exclusive rights to operate at a higher level.
			</p>
			<select
				value={selectedAdmin || ""}
				onChange={(e) => setSelectedAdmin(e.target.value)}>
				<option value="">Select an Admin</option>
				{admins.map((admin) => (
					<option key={admin.id} value={admin.id}>
						{admin.firstname + " " + admin.lastname}
					</option>
				))}
			</select>
			<button
				onClick={handleUpgrade}
				className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
				Upgrade Now
			</button>
			{error && <div>{error}</div>}
		</div>
	);
};

export default MasterFranchiseUpgrade;
