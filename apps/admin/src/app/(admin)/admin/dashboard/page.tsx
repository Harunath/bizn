"use client";
import { signOut } from "next-auth/react";
import React from "react";

const page = () => {
	return (
		<div>
			Admin dashboard <button onClick={() => signOut()}>Signout</button>
		</div>
	);
};

export default page;
