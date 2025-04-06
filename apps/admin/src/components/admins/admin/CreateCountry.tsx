"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Country, State, ICountry } from "country-state-city";

export default function CreateCountry() {
	const [allCountries, setAllCountries] = useState<ICountry[]>([]);
	const [existingCountries, setExistingCountries] = useState<ICountry[]>([]);
	const [selectedIso, setSelectedIso] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/countries");
				const data = await res.json();
				setExistingCountries(data.countries);
			} catch (err) {
				console.error(err);
				setError("Failed to fetch existing countries");
			}
		};

		fetchData();
		const countries = Country.getAllCountries();
		setAllCountries(countries);
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const selectedCountry = allCountries.find(
				(c) => c.isoCode === selectedIso
			);

			if (!selectedCountry) {
				setError("Invalid country selection");
				return;
			}

			// Step 1: Create Country
			const createRes = await fetch("/api/admins/admin/countries", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: selectedCountry.name,
					isoCode: selectedCountry.isoCode,
					phoneCode: `+${selectedCountry.phonecode}`,
				}),
			});

			if (!createRes.ok) {
				const data = await createRes.json();
				throw new Error(data.message || "Failed to create country");
			}

			const createdCountry = await createRes.json();

			// Step 2: Create States
			const states = State.getStatesOfCountry(selectedIso);
			if (states.length > 0) {
				await fetch("/api/admins/admin/state/create-bulk", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						countryId: createdCountry.country.id,
						states: states.map((s) => ({
							name: s.name,
							code: s.isoCode,
						})),
					}),
				});
			}

			setSuccess(
				`Successfully created ${selectedCountry.name} and its states.`
			);
			setSelectedIso("");
		} catch (err: any) {
			console.error(err);
			setError(err.message || "Something went wrong");
		}
	};

	// Filter countries not yet added
	const filteredCountries = allCountries.filter((c) =>
		(existingCountries || []).every((e) => e.isoCode !== c.isoCode)
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className="max-w-md mx-auto p-6 bg-red-500 text-white rounded-2xl shadow-lg">
			<h2 className="text-2xl font-bold mb-4">Create Country</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block mb-1">Select Country</label>
					<select
						value={selectedIso}
						onChange={(e) => setSelectedIso(e.target.value)}
						required
						className="w-full p-2 rounded bg-white text-red-500">
						<option value="">-- Select --</option>
						{filteredCountries.map((country) => (
							<option key={country.isoCode} value={country.isoCode}>
								{country.name} ({country.isoCode})
							</option>
						))}
					</select>
				</div>
				<button
					type="submit"
					className="w-full bg-white text-red-500 font-bold py-2 px-4 rounded hover:bg-red-100">
					Create
				</button>
			</form>

			{error && (
				<p className="mt-4 text-white bg-red-700 p-2 rounded">{error}</p>
			)}
			{success && (
				<p className="mt-4 text-white bg-green-600 p-2 rounded">{success}</p>
			)}
		</motion.div>
	);
}
