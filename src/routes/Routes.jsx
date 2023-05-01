import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

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
            }
        ]
    }
])

export default router;