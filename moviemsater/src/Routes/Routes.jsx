import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddMovie from "../Pages/AddMovie/AddMovie";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
		},
		{
			path: '/addMovie',
			element: <AddMovie></AddMovie>
		},
		
	]
	
  },
  {
	path : '*',
	element: <ErrorPage></ErrorPage>
  }
  
 
]);
