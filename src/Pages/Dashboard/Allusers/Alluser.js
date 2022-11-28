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
                    toast('This email is admin now');
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
                    toast("Deleted Successfully")


                }
            })

    }

    return (
        <div>
            <h3 className='text-3xl text-center'>All Users</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Verify</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((userinfo, i) => <tr key={userinfo._id}>
                                <th>{i}</th>
                                <td>{userinfo.name}</td>
                                <td>{userinfo.email}</td>
                                <td>{userinfo.typeuser}</td>

                                <td><button className='btn btn-outline'>verify</button></td>
                                <td>

                                    {
                                        userinfo?.role ?



                                            <button className='btn btn-outline'>Admin</button>
                                            :
                                            <button onClick={() => handleAdmin(userinfo._id)} className='btn btn-outline'>Make Admin</button>


                                    }

                                </td>
                                <td><button onClick={() => handledelete(userinfo._id)} className='btn btn-outline'>Delete</button></td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;