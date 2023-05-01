import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default router;