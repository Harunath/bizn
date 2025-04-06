// components/admin/CreateMasterFranchiseForm.tsx
"use client"; // Required for components using hooks like useState

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { State } from "@repo/db/client";

interface RegionalFranchiseInput {
	state: string;
	name: string;
}

interface RegionalFranchiseResponse {
	message: "success" | string;
	regionalFranchise?: any; // Define a more specific type if possible based on your Prisma model
	error?: string; // Optional: include specific error message from API
}

const CreateRegionalFranchiseForm: React.FC = () => {
	const [state, setState] = useState("");
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [states, setStates] = useState<State[] | null>(null);

	useEffect(() => {
		getStates();
	});
	const getStates = async () => {
		try {
			const res = await fetch("/api/admins/regional-admin/super-franchise");
			const result = await res.json();
			if (result.message != "success") {
				toast.error(result.message);
			}
			setStates(result.states);
		} catch (e) {
			if (e instanceof Error) toast.error(e.message);
			else toast.error("failed to fetch master franchise details");
		}
	};
	// lib/api.ts (or utils/api.ts)
	const createRegionalFranchise = async (
		data: RegionalFranchiseInput
	): Promise<RegionalFranchiseResponse> => {
		try {
			const response = await fetch(
				"/api/admins/regional-admin/regional-franchise",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const result = await response.json();

			if (result.status != 201) {
				// If API returns a specific error message in JSON under 'message' or 'error' key
				throw new Error(
					result.error || `HTTP error! status: ${response.status}`
				);
			}

			// Assuming the backend sends { message: 'success', masterFranchise: {...} } on success
			// and { message: 'failed', ... } on handled failures (like permissions)
			if (result.message === "failed") {
				throw new Error(
					"Failed to create Regional franchise. Check permissions or input."
				);
			}

			return result as RegionalFranchiseResponse;
		} catch (error) {
			console.error("API call failed:", error);
			// Return a structured error response
			return {
				message: "failed",
				error:
					error instanceof Error ? error.message : "An unknown error occurred",
			};
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		if (!state || !name) {
			toast.error("Please fill in both Country and Name fields.", {
				// You can customize toast appearance here if needed
				// className: 'bg-red-500 text-white', // Example custom styling
			});
			setIsLoading(false);
			return;
		}

		const data: RegionalFranchiseInput = { state, name };

		const response = await createRegionalFranchise(data);

		if (response.message === "success" && response.regionalFranchise) {
			toast.success(
				`Regional Franchise "${response.regionalFranchise.name}" created!`
			);
			// Clear form on success
			setState("");
			setName("");
		} else {
			// Use the error message from the API response if available
			const errorMessage =
				response.error ||
				"Failed to create Master Franchise. Please try again.";
			toast.error(errorMessage, {
				// theme: "colored", // Example: Use colored theme for errors (usually red)
			});
		}

		setIsLoading(false);
	};

	// Define button colors (using Tailwind classes)
	// Using green-500 as "lite green" - adjust if you have a specific shade
	const buttonBgColor = "bg-green-500";
	const buttonHoverBgColor = "hover:bg-green-600";
	const buttonDisabledClasses =
		"disabled:opacity-60 disabled:cursor-not-allowed";

	return (
		<div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">
				Create New Super Franchise
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Country Input */}
				<select
					className="p-1"
					onChange={(e) => setState(e.target.value)}
					disabled={!states || states.length == 0}>
					<option value="">Select Country</option>
					{states &&
						states?.length > 0 &&
						states.map((state, index) => (
							<option key={index} value={state.id}>
								{state.name}
							</option>
						))}
				</select>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-1">
						Enter Super Franchise Name
					</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="e.g., Awesome Franchise Org"
						disabled={isLoading}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50"
					/>
				</div>

				{/* Submit Button */}
				<div>
					<motion.button
						type="submit"
						disabled={isLoading}
						className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${buttonBgColor} ${buttonHoverBgColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 ${buttonDisabledClasses}`}
						whileHover={!isLoading ? { scale: 1.03 } : {}} // Optional hover effect
						whileTap={!isLoading ? { scale: 0.98 } : {}} // Optional tap effect
					>
						{isLoading ? "Creating..." : "Create Super Franchise"}
					</motion.button>
				</div>
			</form>
		</div>
	);
};

export default CreateRegionalFranchiseForm;
