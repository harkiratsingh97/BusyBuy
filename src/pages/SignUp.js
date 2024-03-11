import { Link } from "react-router-dom";
import { useUserValue } from "../userContext";
import { useState } from "react";
export const SignUp = () => {
	const { signUpMethod } = useUserValue();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const setSignUpData = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmitSignUp = (e) => {
		e.preventDefault();
		signUpMethod(formData);
		setFormData({ email: "", password: "" });
	};
	return (
		<>
			<div className="d-flex justify-content-center signUpContainer">
				<form className="signUpForm" onSubmit={onSubmitSignUp}>
					<h1 className="signUpTitle">Sign Up</h1>
					<div className="mb-3 mt-5">
						<input
							onChange={setSignUpData}
							type="email"
							name="email"
							className="form-control"
							placeholder="name@example.com"
							value={formData.email}
						/>
					</div>
					<div className="mb-3">
						<input
							onChange={setSignUpData}
							type="password"
							name="password"
							className="form-control"
							placeholder="password"
							value={formData.password}
						/>
					</div>

					<button type="submit" className="btn btn-primary mb-3 form-control">
						Sign Up
					</button>
					<Link to={"/signin"}> Or SignIn instead</Link>
				</form>
			</div>
		</>
	);
};
