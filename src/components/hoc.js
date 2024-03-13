import { getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const WrapperFunc = (CompToBeWrapped) => {
	return function ComponentWithHoc(props) {
		const [product, setProduct] = useState(null);
		// console.log(props.prod);

		return (
			<div>
				<CompToBeWrapped {...props}></CompToBeWrapped>
			</div>
		);
	};
};

export default WrapperFunc;
