import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Addproduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();





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
            advertise: data.advertise,

            productName: data.pname,


        }

        fetch('https://y-omega-two.vercel.app/advertise', {
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

                    toast.success('Booked');
                }

            })
    }
    return (
        <div className='h-[800px] flex justify-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl'>Add Products</h1>

                <form onSubmit={handleSubmit(handleAddProduct)}>


                    {/*cat name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">category Name</span>

                        </label>
                        <input type="text" {...register(
                            "name",
                            { required: "Name is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}


                    </div>


                    {/* product name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>

                        </label>
                        <input type="text" {...register(
                            "pname",
                            { required: "Product Name is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.pname && <p className='text-red-600'>{errors.pname?.message}</p>}


                    </div>



                    {/* Resale price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale price</span>

                        </label>
                        <input type="number" {...register(
                            "resale",
                            { required: "Type is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.usertype && <p className='text-red-600'>{errors.usertype?.message}</p>}


                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Orginial Price</span>

                        </label>
                        <input type="number" {...register(
                            "orginial",
                            { required: "Orginial price is required" }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">years of use</span>

                        </label>
                        <input type="number" {...register("yearsofuse", { required: "years of use is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>

                        </label>
                        <input type="text" {...register("location", { required: "Location is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posted Date</span>

                        </label>
                        <input type="Date" {...register("pdate", { required: "Posted Date is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.Date && <p className='text-red-600'>{errors.Date?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Name</span>

                        </label>
                        <input type="text" {...register("sellername", { required: "Seller name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.sellername && <p className='text-red-600'>{errors.sellername?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>

                        </label>
                        <input type="url" {...register("imgurl", { required: "URL name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.imgurl && <p className='text-red-600'>{errors.imgurl?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Wants to Advertise your product?</span>

                        </label>
                        <input type="text" {...register("advertise", { required: "Advertise is required" })}
                            className="input input-bordered w-full max-w-xs" placeholder='please type yes/no' />
                        {/* {errors.imgurl && <p className='text-red-600'>{errors.imgurl?.message}</p>} */}


                    </div>





                    <input className='btn btn-primary max-w-xs mt-3' value='Add product' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Addproduct;