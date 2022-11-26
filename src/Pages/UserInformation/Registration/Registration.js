import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(Authcontext);
    const navigate = useNavigate();

    const handleregister = data => {
        console.log(data);
        console.log(data.name);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => console.log(error));

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleregister)}>


                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" {...register(
                            "name",
                            { required: "Name is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}


                    </div>
                    {/* seller/buyer */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller/Buyer</span>

                        </label>
                        <input type="text" {...register(
                            "user",
                            { required: "Name is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}


                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" {...register(
                            "email",
                            { required: "Email Address is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" {...register("password", { required: "Password is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                    </div>





                    <input className='btn btn-primary max-w-xs mt-3' value='Register' type="submit" />
                </form>
                <p>Already have an accout?<Link to='/login' className='text-primary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline max-w-xs'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Registration;