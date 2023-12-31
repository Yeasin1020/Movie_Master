import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
	children: [
		{
			path: '/',
			element: <Home></Home>
		},
		{
			path: '/login',
			element: <Login></Login>
		},
		{
			path: '/signUp',
			element: <SignUp></SignUp>
		}
	]
  },
]);
