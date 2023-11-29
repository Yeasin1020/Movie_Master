import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddMovie from "../Pages/AddMovie/AddMovie";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import AllMovie from "../Pages/AllMovie/AllMovie";
import EditMovie from "../Pages/EditMovie/EditMovie";
import AnimeDetails from "../Pages/AnimeDetails/AnimeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/movieDetails/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movieDetails/${params.id}`),
      },
      {
        path: "/animeDetails/:id",
        element: <AnimeDetails></AnimeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/animeDetails/${params.id}`),
      },
      {
        path: "/allMovie",
        element: <AllMovie></AllMovie>,
      },
      {
        path: "/editMovie/:id",
        element: <EditMovie></EditMovie>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/editMovie/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
