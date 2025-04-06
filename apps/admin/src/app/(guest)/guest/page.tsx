import { redirect } from "next/navigation";
import React from "react";

const page = () => {
	redirect("/no-franchise/dashboard");
};

export default page;
