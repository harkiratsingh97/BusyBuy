import React from "react";
import { useUserValue } from "../userContext";
import { useProductsValue } from "../productsContext";

const ProductsCard = ({ prod }) => {
	//Add to cart Handler
	const { addToCartForUser } = useProductsValue();

	const { userDetails } = useUserValue();

	// console.log(prod);
	if (prod == null) {
		return <></>;
	}
	return (
		<div className="card text-center" style={{ width: "18rem" }}>
			<div className="imgContainer">
				<img src={prod.image} className="card-img-top" alt="..." />
			</div>
			<div className="card-body">
				<h6 className="card-title">{prod.title.slice(0, 30)}</h6>
				<h5 className="card-text">₹ {prod.price}</h5>
				<button
					className="btn btn-primary"
					onClick={() => addToCartForUser(prod.id, userDetails)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductsCard;
