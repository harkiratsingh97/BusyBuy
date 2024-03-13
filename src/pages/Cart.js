import { CartProduct } from "../components/CartProduct";
import WrapperFunc from "../components/hoc";
import ProductsCard from "../components/productsCard";
import { useProductsValue } from "../productsContext";
import { useUserValue } from "../userContext";

export const Cart = () => {
	const { userDetails } = useUserValue();
	const { orderCart } = useProductsValue();
	console.log(userDetails);
	return (
		<>
			{userDetails && userDetails.cart.length == 0 && (
				<div>Nothing in cart</div>
			)}
			{userDetails && userDetails.cart && (
				<div className="container">
					<br></br>
					<div className="cartValueWrapper">
						<h5>
							Total Price :{" "}
							{parseInt(
								userDetails.cart.reduce((sum, prod) => {
									return sum + prod.price * prod.quantity;
								}, 0)
							)}
						</h5>
						<button
							onClick={orderCart}
							type="button"
							className="btn btn-primary"
						>
							Purchase
						</button>
					</div>
					<div className="productsWrapper">
						{userDetails.cart.map((prod) => {
							return <CartProduct key={prod.id} prod={prod} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};
