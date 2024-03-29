import { createBrowserRouter } from "react-router-dom";
import Dashboartlaout from "../../Layout/Dashboardlayout/Dashboartlaout";
import Main from "../../Layout/Main";
import Privateroute from "../../Shared/Privateroute/Privateroute";
import Adminroute from "../Adminroute/Adminroute";

import Allcatagories from "../AllCatagories/Allcatagories";
import Blog from "../Blog/Blog";
import Addproduct from "../Dashboard/Addproduct/Addproduct";

import Alluser from "../Dashboard/Allusers/Alluser";
import Dashboard from "../Dashboard/Dash/Dashboard";
import Myorders from "../Dashboard/Myorders/Myorders";
import Payment from "../Dashboard/Payment/Payment";

import Home from "../Home/Home";
import Login from "../UserInformation/Login/Login";
import Registration from "../UserInformation/Registration/Registration";

//resale products

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allcatagories/:name',
                loader: ({ params }) => fetch(`https://y-omega-two.vercel.app/catagories/${params.name}`),
                element: <Privateroute><Allcatagories></Allcatagories></Privateroute>
            },

        ]


    },

    {
        path: '/dashboard',

        element: <Privateroute><Dashboartlaout></Dashboartlaout></Privateroute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/dashboard/alluser',
                element: <Alluser></Alluser>
            },
            {
                path: '/dashboard/addproduct',
                element: <Addproduct></Addproduct>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://y-omega-two.vercel.app/bookings/${params.id}`),
                element: <Payment></Payment>
            }

        ]
    },

    {
        path: '*',
        element: <div className="my-60 mx-96">
            <img src="https://www.crazydomains.co.nz/help/404-not-found-error-explained/?image_id=2979" alt="" />

        </div>
    }

])