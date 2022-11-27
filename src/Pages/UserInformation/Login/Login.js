import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(Authcontext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    //function is for google signIn
    const handlegoogleevent = (event) => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                navigate(from, { replace: true })

            })

            .catch(error => console.error(error))
    }



    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error));
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>



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





                    <input className='btn btn-primary w-full mt-3' value='Login' type="submit" />
                </form>
                <p><Link to='/register' className='text-primary'>To create a new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handlegoogleevent} className='btn btn-outline max-w-xs'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;