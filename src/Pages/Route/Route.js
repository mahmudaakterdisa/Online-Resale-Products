import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Privateroute from "../../Shared/Privateroute/Privateroute";

import Allcatagories from "../AllCatagories/Allcatagories";
import Dashboard from "../Dashboard/Dash/Dashboard";
import Home from "../Home/Home";
import Login from "../UserInformation/Login/Login";
import Registration from "../UserInformation/Registration/Registration";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/allcatagories/:name',
                loader: ({ params }) => fetch(`https://y-omega-two.vercel.app/catagories/${params.name}`),
                element: <Allcatagories></Allcatagories>
            },

        ]
    },

    {
        path: '/dashboard',
        element: <Privateroute><Dashboard></Dashboard></Privateroute>
    }


])