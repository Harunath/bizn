"use client";

import { useEffect, useState } from "react";
import DisplayStates from "./DisplayStates";

interface CountryType {
	id: string;
	name: string;
	isoCode: string;
	phoneCode: string;
}

const DisplayCountries = () => {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [filteredCountries, setFilteredCountries] = useState<CountryType[]>([]);
	const [countryid, setCountryid] = useState<string | null>(null);
	const [selectedCountryName, setSelectedCountryName] = useState<string | null>(
		null
	);
	const [search, setSearch] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getCountries = async () => {
			try {
				const res = await fetch("/api/admins/admin/countries");
				if (!res.ok) throw new Error("Failed to fetch countries");

				const data = await res.json();
				const countryList = Array.isArray(data) ? data : data.countries;

				setCountries(countryList);
				setFilteredCountries(countryList);

				const india = countryList.find(
					(c: CountryType) => c.name.toLowerCase() === "india"
				);
				if (india) {
					setCountryid(india.id);
					setSelectedCountryName(india.name);
				}
			} catch (error) {
				console.error(error);
				setError("Failed to load countries.");
			} finally {
				setLoading(false);
			}
		};

		getCountries();
	}, []);

	const handleSelect = (country: CountryType) => {
		setCountryid(country.id);
		setSelectedCountryName(country.name);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		setSearch(value);
		const filtered = countries.filter((c) =>
			c.name.toLowerCase().includes(value)
		);
		setFilteredCountries(filtered);
	};

	return (
		<div className="flex flex-col md:flex-row h-[85vh] p-4 gap-4">
			<div className="w-full md:w-1/3 lg:w-1/4 bg-red-100 rounded-lg shadow p-4 overflow-y-auto">
				<h2 className="text-xl font-semibold mb-2 text-red-600">Countries</h2>
				<input
					type="text"
					value={search}
					onChange={handleSearch}
					placeholder="Search countries..."
					className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
				/>

				{loading ? (
					<div className="flex items-center justify-center py-10">
						<div className="w-6 h-6 border-4 border-red-400 border-t-transparent rounded-full animate-spin"></div>
					</div>
				) : error ? (
					<p className="text-red-500">{error}</p>
				) : (
					<ul className="space-y-2">
						{filteredCountries.map((country) => (
							<li
								key={country.id}
								className={`p-3 rounded cursor-pointer transition hover:bg-red-100 ${
									countryid === country.id
										? "bg-red-600 font-semibold"
										: "bg-gray-50"
								}`}
								onClick={() => handleSelect(country)}>
								{country.name}
							</li>
						))}
					</ul>
				)}
			</div>

			<div className="w-full md:w-2/3 lg:w-3/4 bg-red-100 rounded-lg shadow p-4 overflow-y-auto">
				{countryid ? (
					<>
						<h2 className="text-xl font-semibold mb-4 text-red-600">
							States in {selectedCountryName}
						</h2>
						<DisplayStates countryid={countryid} />
					</>
				) : (
					<p className="text-gray-500">Select a country to view its states.</p>
				)}
			</div>
		</div>
	);
};

export default DisplayCountries;
