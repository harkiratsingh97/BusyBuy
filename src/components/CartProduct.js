import React from "react";
import { useUserValue } from "../userContext";
import { useProductsValue } from "../productsContext";

export const CartProduct = ({ prod }) => {
	const { userDetails } = useUserValue();
	const { addToCartForUser, removeFromCartForUser } = useProductsValue();
	// console.log(prod);
	return (
		<>
			{prod && (
				<div className="card text-center" style={{ width: "18rem" }}>
					<div className="imgContainer">
						<img src={prod.image} className="card-img-top" alt="..." />
					</div>
					<div className="card-body">
						<h6 className="card-title">{prod.title.slice(0, 30)}</h6>

						<h5 className="card-text">₹ {prod.price}</h5>

						<button
							className="btn btn-primary"
							onClick={() => removeFromCartForUser(prod.id, userDetails)}
						>
							-
						</button>
						<h5 className="card-text" style={{ display: "inline" }}>
							{" "}
							{prod.quantity}{" "}
						</h5>

						<button
							className="btn btn-primary"
							onClick={() => addToCartForUser(prod.id, userDetails)}
						>
							+
						</button>
					</div>
				</div>
			)}
		</>
	);
};
// export default CartProduct;
