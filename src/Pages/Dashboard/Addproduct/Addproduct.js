import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Shared/Authprovider/Authprovider';
import AOS from "aos";
import "aos/dist/aos.css";
const Addproduct = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { user } = useContext(Authcontext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const defaultValues = {
        email: user.email
    };




    const handleAddProduct = (data) => {
        console.log(data)



        const booking = {
            image: data.imgurl,
            location: data.location,

            catagory_name: data.name,
            resaleprice: data.resale,
            originalprice: data.orginial,

            yearsofuse: data.yearsofuse,

            Date: data.pdate,
            sallername: data.sellername,
            salleremail: data.salleremail,
            advertise: data.advertise,

            name: data.pname,


        }

        fetch('https://y-omega-two.vercel.app/catagories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Added Successfully');
                    navigate('/');
                }


            })
    }
    return (
        <div className=' flex flex-col justify-center items-center my-20'>
            <div className='w-auto'>
                <div className='text-3xl text-center font-serif font-bold uppercase underline' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                    <h1>MÖBEL Products</h1>
                </div>
                <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="800">
                    <form onSubmit={handleSubmit(handleAddProduct)} className='my-10'>


                        {/*cat name */}
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Category Name</span>

                            </label>
                            <input type="text" {...register(
                                "name",
                                { required: "Name is required" }
                            )}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}


                        </div>


                        {/* product name */}
                        <div className="form-control w-full font-serif font-semibold ">
                            <label className="label">
                                <span className="label-text">Product Name</span>

                            </label>
                            <input type="text" {...register(
                                "pname",
                                { required: "Product Name is required" }
                            )}
                                className="input input-bordered w-full rounded-none" />
                            {errors.pname && <p className='text-red-600'>{errors.pname?.message}</p>}


                        </div>



                        {/* Resale price */}
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Resale Price</span>

                            </label>
                            <input type="number" {...register(
                                "resale",
                                { required: "Type is required" }
                            )}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.usertype && <p className='text-red-600'>{errors.usertype?.message}</p>}


                        </div>



                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Original Price</span>

                            </label>
                            <input type="number" {...register(
                                "orginial",
                                { required: "Orginial price is required" }
                            )}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}


                        </div>
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Years Of Use</span>

                            </label>
                            <input type="number" {...register("yearsofuse", { required: "years of use is required" })}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                        </div>
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Location</span>

                            </label>
                            <input type="text" {...register("location", { required: "Location is required" })}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                        </div>
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Posted Date</span>

                            </label>
                            <input type="Date" {...register("pdate", { required: "Posted Date is required" })}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.Date && <p className='text-red-600'>{errors.Date?.message}</p>}


                        </div>

                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Product Image</span>

                            </label>
                            <input type="url" {...register("imgurl", { required: "URL name is required" })}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.imgurl && <p className='text-red-600'>{errors.imgurl?.message}</p>}


                        </div>

                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Seller Name</span>

                            </label>
                            <input type="text" {...register("sellername", { required: "Seller name is required" })}
                                className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.sellername && <p className='text-red-600'>{errors.sellername?.message}</p>}


                        </div>
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Seller Email</span>

                            </label>
                            <input type="text" {...register("selleremail", { required: "Seller email is required" })}
                                defaultValue={defaultValues.email} className="input input-bordered w-full max-w-xs rounded-none" />
                            {errors.selleremail && <p className='text-red-600'>{errors.selleremail?.message}</p>}


                        </div>
                        <div className="form-control w-full max-w-xs font-serif font-semibold">
                            <label className="label">
                                <span className="label-text">Wants to Advertise Your Product?</span>

                            </label>
                            <input type="text" {...register("advertise", { required: "Advertise is required" })}
                                className="input input-bordered w-full max-w-xs rounded-none" placeholder='Please Type yes/no' />
                            {/* {errors.imgurl && <p className='text-red-600'>{errors.imgurl?.message}</p>} */}


                        </div>





                        <input className='btn btn-outline hover:btn-secondary font-serif max-w-xs mt-3' value='Add product' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addproduct;