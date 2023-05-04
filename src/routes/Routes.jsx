import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import ChefRecipes from "../pages/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chef')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefrecipes/:chefID',
                element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/chefrecipes/${params.chefID}`)
            },
            // {
            //     path: '/chefrecipes/:chefID',
            //     element: <ChefRecipes></ChefRecipes>,
            //     loader: ({params})=>fetch(`http://localhost:5000/chefrecipes/${params.chefID}`)
            // },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default router;