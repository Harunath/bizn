import React from "react";
import { AdminRole } from "@repo/db/client";
import PaymentProcessing from "../../../../../../../../components/upgrade/PaymentProcessing";

const page = () => {
	return (
		<div>
			<PaymentProcessing updateRole={AdminRole.MASTER_ADMIN} />
		</div>
	);
};

export default page;
