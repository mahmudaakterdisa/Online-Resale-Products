import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Availableproducts from './Availableproducts/Availableproducts';
import './Allcatagories.css'

const Allcatagories = () => {
    const getcatagory = useLoaderData();
    // console.log(getcatagory);
    const { catagory_name, catagory_product } = getcatagory;
    return (
        <div className='allcatagories-container'>
            <div className='allcatagories-text'>
                <h1>{catagory_name}</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 allproducts-container'>
                {
                    catagory_product.map(products => <Availableproducts key={products.product_id} products={products}></Availableproducts>)
                }
            </div>


        </div>
    );
};

export default Allcatagories;