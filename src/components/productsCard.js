import React from "react";
import { useUserValue } from "../userContext";
import { useProductsValue } from "../productsContext";

const ProductsCard = ({ prod }) => {
	//Add to cart Handler
	const { addToCartForUser } = useProductsValue();

	const { user } = useUserValue();
	return (
		<div className="card text-center" style={{ width: "18rem" }}>
			<img src={prod.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h6 className="card-title">{prod.title}</h6>
				<h5 className="card-text">₹ {prod.price}</h5>
				<button
					className="btn btn-primary"
					onClick={() => addToCartForUser(prod.id, user)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductsCard;
