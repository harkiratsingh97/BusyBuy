import { cloneElement } from "react";
import { Order } from "../components/order";
import { useUserValue } from "../userContext";

export const MyOrders = () => {
	const { userDetails } = useUserValue();
	if (!userDetails.orders) {
		return <></>;
	}
	const orders = userDetails.orders;
	console.log(orders);
	// console.log(userDetails.orders);

	return (
		<div
			className=""
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<h2 style={{ textAlign: "center" }}>Your Orders</h2>

			{orders.map((order, index) => (
				<Order key={index} order={order} />
			))}
		</div>
	);
};
