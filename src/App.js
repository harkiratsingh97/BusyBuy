import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//User Context
import { UserContextProvider } from "./userContext";
import { MyOrders } from "./pages/MyOrders";
import { SignUp } from "./pages/SignUp";
import { Cart } from "./pages/Cart";
import { ProtectedRouteLoggedIn } from "./utils/ProtectedRouteLoggedIn";
import { ProtectedRouteLoggedOut } from "./utils/ProtectedRouteLoggedOut";
import { ProductsContextProvider } from "./productsContext";

//Routing Implementation
const router = createBrowserRouter([
	{
		path: "/",
		element: <Navbar />,
		//   loader: rootLoader,
		children: [
			{
				path: "",
				element: <Home />,
				//   loader: teamLoader,
			},

			{
				path: "signin",
				element: (
					<ProtectedRouteLoggedOut>
						<SignIn />
					</ProtectedRouteLoggedOut>
				),
			},
			{
				path: "signup",
				element: (
					<ProtectedRouteLoggedOut>
						<SignUp />
					</ProtectedRouteLoggedOut>
				),
			},
			{
				path: "/",
				element: <ProtectedRouteLoggedIn />,
				children: [
					{
						path: "myorders",
						element: <MyOrders />,
					},
					{
						path: "cart",
						element: <Cart />,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<UserContextProvider>
			<ProductsContextProvider>
				<div className="App">
					<RouterProvider router={router} />
				</div>
			</ProductsContextProvider>
		</UserContextProvider>
	);
}

export default App;
