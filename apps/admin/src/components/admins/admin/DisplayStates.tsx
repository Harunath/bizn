"use client";

import { useEffect, useState } from "react";

interface State {
	id: string;
	name: string;
	code: string;
}

const DisplayStates = ({ countryid }: { countryid: string }) => {
	const [states, setStates] = useState<State[]>([]);
	const [filteredStates, setFilteredStates] = useState<State[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>("");

	useEffect(() => {
		const fetchStates = async () => {
			try {
				const res = await fetch(`/api/admins/admin/state/${countryid}`);
				if (!res.ok) {
					throw new Error("Failed to fetch states");
				}
				const data = await res.json();
				const stateList = Array.isArray(data) ? data : data.states;
				setStates(stateList);
				setFilteredStates(stateList);
			} catch (err) {
				console.error("Error fetching states:", err);
				setError("Failed to load states.");
			} finally {
				setLoading(false);
			}
		};

		fetchStates();
	}, [countryid]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);

		const filtered = states.filter((state) =>
			state.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredStates(filtered);
	};

	if (loading)
		return <p className="text-center text-gray-500">Loading states...</p>;
	if (error) return <p className="text-center text-red-500">{error}</p>;

	return (
		<div className="container mx-auto p-6 max-w-3xl  ">
			<h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
				States in Selected Country
			</h2>

			<input
				type="text"
				value={searchTerm}
				onChange={handleSearch}
				placeholder="Search states..."
				className="w-full p-3 mb-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
			/>

			<div className="states-list max-h-96 overflow-y-auto">
				{filteredStates.length > 0 ? (
					filteredStates.map((state) => (
						<div
							key={state.id}
							className="p-4 mb-4 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300">
							<h3 className="text-xl font-medium text-gray-800">
								{state.name}
							</h3>
							<p className="text-gray-500">Code: {state.code}</p>
						</div>
					))
				) : (
					<p className="text-center text-gray-500">
						No states found for this country.
					</p>
				)}
			</div>
		</div>
	);
};

export default DisplayStates;
