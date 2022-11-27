import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Availableproducts from './Availableproducts/Availableproducts';
import './Allcatagories.css'
import Bookingmodals from '../Bookinmodals/Bookingmodals';

const Allcatagories = () => {
    const getcatagory = useLoaderData();
    const [furniture, setFurniture] = useState(null);
    const { catagory_name, catagory_product } = getcatagory;

    return (
        <div className='allcatagories-container'>
            <div className='allcatagories-text'>
                <h1 className='text-4xl'>{catagory_name}</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 allproducts-container'>
                {
                    catagory_product.map(products => <Availableproducts key={products.product_id} products={products} setFurniture={setFurniture}></Availableproducts>)
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