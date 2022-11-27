import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';

import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header/Header';
import { Authcontext } from '../../Shared/Authprovider/Authprovider';

const Dashboartlaout = () => {
    const { user } = useContext(Authcontext);
    const [isAdmin] = useAdmin(user?.email);

    const [userType, setUserType] = useState({});

    useEffect(() => {

        fetch(`https://y-omega-two.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setUserType(data)
            })
    }, [user?.email])

    // console.log(userType);


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



                        <li className='mb-5'><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li className='mb-5'><Link to='/dashboard/adddoc'>Add Products</Link></li>
                        {
                            isAdmin && <>

                                <li className='mb-5'><Link to='/dashboard/alluser'>All Users</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboartlaout;