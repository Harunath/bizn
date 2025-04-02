import "next-auth";
import { UserMembershipType } from "@repo/db/client";
declare module "next-auth" {
	interface User {
		id: string;
		email: string; // Explicitly define email as always available
		membershipType: UserMembershipType;
		businessDetailsId: string | null;
		firstname: string;
		lastname: string;
		leadingChapterId : null | string;
		leadingClubId : null | string;
	}

	interface Session {
		user: User; // Link the extended User type here
	}
}
