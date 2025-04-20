"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AdminRole } from "@repo/db/client";
import { toast } from "react-toastify";
import { CheckoutPage } from "@repo/ui/CheckoutPage";

interface adminType {
	id: string;
	firstname: string;
	lastname: string;
}
const MasterFranchiseUpgrade = () => {
	const [admins, setAdmins] = useState<adminType[]>([]);
	const [error, setError] = useState("");
	const [parentAdminId, setParentAdminId] = useState<string | null>(null);
	const [sessionId, setSessionId] = useState<string>("");

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

	const handleUpgrade = async () => {
		try {
			const res = await fetch("/api/upgrade/payment", {
				method: "POST",
				body: JSON.stringify({ parentAdminId: parentAdminId }),
			});
			const data = await res.json();
			if (data.payment_session_id) {
				setSessionId(data.payment_session_id);
			} else {
				toast.error("Failed to create payment session");
			}
		} catch (e) {
			console.log(e);
			setError("failed to upgrade");
		}
	};
	if (sessionId) {
		return <CheckoutPage sessionId={sessionId} />;
	} else
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
				<h2 className="text-3xl font-bold text-red-600 mb-4">
					Upgrade to Master Franchise
				</h2>
				<p className="text-gray-700 mb-6">
					Gain exclusive rights to operate at a higher level.
				</p>
				<select
					value={parentAdminId || ""}
					onChange={(e) => setParentAdminId(e.target.value)}>
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
