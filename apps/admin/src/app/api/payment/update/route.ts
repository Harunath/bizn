import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
	const body = request.json();
	console.log(body);
	return;
};
