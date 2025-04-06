"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const franchises = [
	{
		title: "Master-Franchise",
		description:
			"Control and manage an entire country or large region with exclusive rights.",
		url: "/guest/upgrade/master-franchise",
	},
	{
		title: "Super-Franchise",
		description:
			"Operate multiple locations within a large region with significant autonomy.",
		url: "/guest/upgrade/super-franchise",
	},
	{
		title: "Regional-Franchise",
		description:
			"Manage and expand within a specific city or province with full support.",
		url: "/guest/upgrade/regional-franchise",
	},
];

const Upgrade = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
			<h2 className="text-4xl font-bold text-red-600 mb-8">
				Franchise Opportunities
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{franchises.map((franchise, index) => (
					<motion.div
						key={index}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="cursor-pointer bg-red-600 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
						onClick={() => router.push(franchise.url)}>
						<h3 className="text-2xl font-semibold mb-2">{franchise.title}</h3>
						<p className="text-sm mb-4">{franchise.description}</p>
						<button className="mt-4 bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
							Learn More
						</button>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Upgrade;
