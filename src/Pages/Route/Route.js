import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allcatagories from "../AllCatagories/Allcatagories";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allcatagories/:id',
                loader: ({ params }) => fetch(`https://y-omega-two.vercel.app/services/${params.id}`),
                element: <Allcatagories></Allcatagories>
            }
        ]
    }
])