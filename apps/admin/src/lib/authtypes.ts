import "next-auth";
import { AdminRole } from "@repo/db/client";
declare module "next-auth" {
	interface User {
		id: string;
		email: string; // Explicitly define email as always available
		firstname: string;
		lastname: string;
		role: AdminRole;
		parentAdminId: string | null;
		masterFranchisesIds: string[] | null;
	}

	interface Session {
		user: User; // Link the extended User type here
	}
}
