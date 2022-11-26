import { createBrowserRouter } from "react-router-dom";
import Dashboartlaout from "../../Layout/Dashboardlayout/Dashboartlaout";
import Main from "../../Layout/Main";
import Privateroute from "../../Shared/Privateroute/Privateroute";

import Allcatagories from "../AllCatagories/Allcatagories";
import Dashboard from "../Dashboard/Dash/Dashboard";
import Myorders from "../Dashboard/Myorders/Myorders";

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
        element: <Privateroute><Dashboartlaout></Dashboartlaout></Privateroute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Dashboard></Dashboard>
            // },
            {
                path: '/dashboard',
                element: <Myorders></Myorders>
            }
        ]
    }


])