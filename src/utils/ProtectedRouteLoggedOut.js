import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserValue } from "../userContext";

export const ProtectedRouteLoggedOut = ({ children }) => {
	const { user } = useUserValue();
	let location = useLocation();

	if (user) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}
	return children;
};
