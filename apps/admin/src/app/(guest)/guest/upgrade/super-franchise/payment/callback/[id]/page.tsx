import React from "react";
import PaymentProcessing from "../../../../../../../../components/upgrade/PaymentProcessing";
import { AdminRole } from "@repo/db/client";
const page = () => {
	return (
		<div>
			<PaymentProcessing updateRole={AdminRole.SUPER_ADMIN} />
		</div>
	);
};

export default page;
