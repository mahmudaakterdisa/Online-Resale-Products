
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';
import AOS from "aos";
import "aos/dist/aos.css";

const Myorders = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
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
        <div className='flex flex-col justify-center items-center my-20'>
            <div className='text-3xl text-center font-serif font-bold uppercase underline' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                <h3>MÖBEL Orders</h3>
            </div>
            <div className="overflow-x-auto my-10" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="800">
                <table className="table w-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th className=' font-serif'>Name</th>
                            <th className=' font-serif'>Resale-Price</th>
                            <th className=' font-serif'>Meeting-Location</th>
                            <th className=' font-serif'>Payment</th>
                            <th className=' font-serif'>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((book, i) => <tr key={book._id}>
                                <th className=' font-serif'>{i}</th>
                                <td className=' font-serif'>{book.productName}</td>
                                <td className=' font-serif'>{book.productPrice}</td>
                                <td className=' font-serif'>{book.meetingLocation}</td>
                                <td className=' font-serif'>{
                                    book.productPrice && !book.paid && <Link
                                        to={`/dashboard/payment/${book._id}`}>

                                        <button
                                            className='btn btn-outline hover:btn-secondary font-serif rounded-none'>
                                            Pay Now
                                        </button>
                                    </Link>

                                }
                                    {
                                        book.productPrice && book.paid &&

                                        <span className='text-green-500 font-serif'>paid</span>
                                    }



                                </td>
                                <td><button onClick={() => handleOrderDelete(book._id)} className='btn btn-outline hover:btn-secondary font-serif rounded-none'>DELETE</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;