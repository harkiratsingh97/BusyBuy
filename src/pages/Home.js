import ProductsCard from "../components/productsCard";
import { useProductsValue } from "../productsContext";

export const Home = () => {
	const { products } = useProductsValue();
	return (
		<>
			<br></br>
			<div className="container">
				<input
					className="form-control"
					list="datalistOptions"
					id="exampleDataList"
					placeholder="Search By Name"
				/>
				<br></br>
				<div className="productsWrapper">
					{products.map((prod, index) => (
						<ProductsCard key={index} prod={prod} />
					))}
				</div>
			</div>
		</>
	);
};
