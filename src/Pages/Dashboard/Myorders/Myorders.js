import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';

const Myorders = () => {
    const { user } = useContext(Authcontext);
    const [boookingsdata, setBookingsdata] = useState([]);
    // const url = `https://y-omega-two.vercel.app/bookings?email=${user?.email}`;
    // console.log(url);
    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    useEffect(() => {
        fetch(`https://y-omega-two.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookingsdata(data);
            })
    }, [user?.email])

    console.log(boookingsdata)

    return (
        <div>
            <h3 className='text-3xl text-center'>My Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Resale-Price</th>
                            <th>Meeting-Location</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            boookingsdata.map((book, i) => <tr>
                                <th>{i}</th>
                                <td>{book.productName}</td>
                                <td>{book.productPrice}</td>
                                <td>{book.meetingLocation}</td>
                                <td><button className='btn btn-outline'>pay now</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;