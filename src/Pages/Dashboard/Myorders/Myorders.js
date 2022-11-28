
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';

const Myorders = () => {
    const { user } = useContext(Authcontext);

    const url = `https://y-omega-two.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });



    //handle delete
    const handleOrderDelete = (orderid) => {
        console.log(orderid);
        fetch(`https://y-omega-two.vercel.app/bookings/${orderid}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch();
                    toast('Deleted Successfully');
                }
            })

    }



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
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((book, i) => <tr key={book._id}>
                                <th>{i}</th>
                                <td>{book.productName}</td>
                                <td>{book.productPrice}</td>
                                <td>{book.meetingLocation}</td>
                                <td>{
                                    book.productPrice && !book.paid && <Link
                                        to={`/dashboard/payment/${book._id}`}>

                                        <button
                                            className='btn btn-outline'>
                                            pay now
                                        </button>
                                    </Link>

                                }
                                    {
                                        book.productPrice && book.paid &&

                                        <span className='text-primary'>paid</span>
                                    }



                                </td>
                                <td><button onClick={() => handleOrderDelete(book._id)} className='btn btn-outline'>DELETE</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;