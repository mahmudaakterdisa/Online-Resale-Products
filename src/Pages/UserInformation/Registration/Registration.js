import React, { useContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';
import AOS from "aos";
import "aos/dist/aos.css";

const Registration = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(Authcontext);
    const navigate = useNavigate();

    const handleregister = data => {
        console.log(data);
        console.log(data.usertype);
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
                        saveUser(data.name, data.email, data.usertype);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => console.log(error));

    }

    const saveUser = (name, email, typeuser) => {
        const user = { name, email, typeuser };
        fetch('https://y-omega-two.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <div className='text-4xl text-center uppercase' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                    <h2>MÖBEL Register</h2>
                </div>
                <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="800">

                    <form onSubmit={handleSubmit(handleregister)}>


                        {/* name */}
                        <div className="form-control w-full max-w-xs font-serif">
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
                        <div className="form-control w-full max-w-xs font-serif">
                            <label className="label">
                                <span className="label-text">Seller/Buyer</span>

                            </label>
                            <input type="text" {...register(
                                "usertype",
                                { required: "Type is required" }
                            )}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.usertype && <p className='text-red-600'>{errors.usertype?.message}</p>}


                        </div>



                        <div className="form-control w-full max-w-xs font-serif">
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
                        <div className="form-control w-full max-w-xs font-serif">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" {...register("password", { required: "Password is required" })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                        </div>





                        <input className='btn btn-outline hover:btn-secondary font-serif max-w-xs mt-3' value='Register' type="submit" />
                    </form>

                    <p className=' font-serif'>Already Have An MÖBEL Account?<Link to='/login' className='text-secondary'>Please Login</Link></p>
                    <div className="divider  font-serif">OR</div>
                    <button className='btn btn-outline hover:btn-secondary font-serif max-w-xs'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;