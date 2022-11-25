import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { catagory_name, _id } = service;


    return (
        <div>
            <Link to={`/allcatagories/${_id}`}>
                <h2>{catagory_name}</h2>
            </Link>

        </div>
    );
};

export default Services;