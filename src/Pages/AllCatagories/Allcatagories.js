import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Availableproducts from './Availableproducts/Availableproducts';
import './Allcatagories.css'
import Bookingmodals from '../Bookinmodals/Bookingmodals';
import CatBanner from './CategoriesBanner/CatBanner';

const Allcatagories = () => {


    const getcatagory = useLoaderData();




    const [furniture, setFurniture] = useState(null);




    return (
        <div className='allcatagories-container'>

            <div>
                <CatBanner></CatBanner>
            </div>

            <div className='mx-auto text-4xl font-serif text-center max-sm:w-3/4 mt-20 underline' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">


                <p className=''>MÖBEL AVAILABLE PRODUCTS</p>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-5/6 mx-auto gap-20 py-20'>
                {
                    getcatagory.map(products => <Availableproducts key={products.product_id} products={products} setFurniture={setFurniture}></Availableproducts>)
                }




            </div>
            {
                furniture &&
                <Bookingmodals furniture={furniture} setFurniture={setFurniture}></Bookingmodals>
            }


        </div>
    );
};

export default Allcatagories;