import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserValue } from "../userContext";

export const ProtectedRouteLoggedIn = ({ children }) => {
	const { user } = useUserValue();
	let location = useLocation();

	if (!user) {
		return <Navigate to="/signin" state={{ from: location }} replace />;
	}
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};
