"use client";
import React from "react";
import { useSession } from "next-auth/react";
const ProfilePage = () => {
	const { data: session } = useSession();
	return (
		<div>
			<div>
				<h1 className="text-2xl font-bold">Profile</h1>
				<div className="mt-4">
					<p className="text-lg font-semibold">
						Name: {session?.user.firstname} {session?.user.lastname}
					</p>
					<p className="text-lg font-semibold">Email: {session?.user.email}</p>
					<p className="text-lg font-semibold">Role: {session?.user.role}</p>
				</div>
				<div className="mt-4">
					<p className="text-lg font-semibold">ID: {session?.user.id}</p>
					<p className="text-lg font-semibold">
						Parent Admin ID: {session?.user.parentAdminId}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
