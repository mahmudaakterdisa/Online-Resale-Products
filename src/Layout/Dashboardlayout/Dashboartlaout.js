import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header/Header';

const Dashboartlaout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>My Orders</a></li>
                        <li><a>Add Product</a></li>
                        <li><a>All Users</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboartlaout;