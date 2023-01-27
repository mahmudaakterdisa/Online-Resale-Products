import { useQuery } from '@tanstack/react-query';
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
    }, [user?.email]);


    // seller/Buyer

    const url = `https://y-omega-two.vercel.app/users?email=${user?.email}`;

    const { data: specificUsers = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
    console.log(specificUsers)
    console.log(user.email);
    return (
        <div>
            <div className='border-b border-black'>
                <Header></Header>
            </div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-auto text-black  bg-zinc-200">

                        {/* {
                            specificUsers.map(userbuyer =>

                                userbuyer.typeuser === "Buyer" && userbuyer.email === user.email && 
                            )


                        } */}
                        <li className=' my-10 hover:btn-secondary font-serif'><Link to='/dashboard/myorders'>My Orders</Link></li>

                        {
                            specificUsers.map(userseller =>

                                userseller.typeuser === "Seller" && userseller.email === user.email && <li className='hover:btn-secondary font-serif'><Link to='/dashboard/addproduct'>Add Products</Link></li>



                            )


                        }

                        {
                            isAdmin && <>

                                <li className='mt-10 hover:btn-secondary font-serif'><Link to='/dashboard/alluser'>All Users</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboartlaout;