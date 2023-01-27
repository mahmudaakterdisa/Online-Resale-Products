import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast, { ToastBar } from 'react-hot-toast';

const Alluser = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://y-omega-two.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });


    //Admin
    const handleAdmin = (id) => {
        fetch(`https://y-omega-two.vercel.app/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('This email is admin now');
                    refetch();
                }
            })



    }

    //handle delete
    const handledelete = (userid) => {
        fetch(`https://y-omega-two.vercel.app/users/${userid}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Deleted Successfully")


                }
            })

    }

    const handleVerify = () => {

    }

    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <div className='text-3xl text-center font-serif font-bold uppercase underline' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                <h3 >MÖBEL Users</h3>
            </div>

            <div className="overflow-x-auto my-10" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="800">
                <table className="table w-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th className=' font-serif'>Name</th>
                            <th className=' font-serif'>Email</th>
                            <th className=' font-serif'>Status</th>
                            {/* <th className=' font-serif'>Verify</th> */}
                            <th className=' font-serif'>Admin</th>
                            <th className=' font-serif'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((userinfo, i) => <tr key={userinfo._id}>
                                <th className=' font-serif'>{i}</th>
                                <td className=' font-serif'>{userinfo.name}</td>
                                <td className=' font-serif'>{userinfo.email}</td>
                                <td className=' font-serif'>{userinfo.typeuser}</td>

                                {/* <td><button onClick={() => handleVerify(userinfo._id)} className='btn btn-outline hover:btn-secondary font-serif rounded-none'>verify</button></td> */}
                                <td>

                                    {
                                        userinfo?.role ?



                                            <button className='btn btn-outline hover:btn-secondary font-serif rounded-none'>Admin</button>
                                            :
                                            <button onClick={() => handleAdmin(userinfo._id)} className='btn btn-outline hover:btn-secondary font-serif rounded-none'>Make Admin</button>


                                    }

                                </td>
                                <td><button onClick={() => handledelete(userinfo._id)} className='btn btn-outline hover:btn-secondary font-serif rounded-none'>Delete</button></td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;