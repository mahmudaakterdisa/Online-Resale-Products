import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { catagory_name, _id } = service;


    return (
        <div>
            <Link to={`/allcatagories/${catagory_name}`}>
                <h2 className='text-xl'>{catagory_name}</h2>
            </Link>



        </div>
    );
};

export default Services;