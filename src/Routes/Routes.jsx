import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/HomeArea/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Blog from "../components/Pages/Blog/Blog";
import ChefRecipeDetails from "../components/Pages/ChefRecipeDetails/ChefRecipeDetails";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "chefdata/:id",
        element: (
          <ProtectedRoute>
            <ChefRecipeDetails></ChefRecipeDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-gamma-sage.vercel.app/recipedata/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
