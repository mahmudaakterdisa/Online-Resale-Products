import React from 'react';
import './Availableproducts.css';

const Availableproducts = ({ products }) => {
    console.log(products);
    const { image, name, resaleprice, originalprice, yearsofuse, location, Date } = products
    return (
        <div className="card w-96 bg-base-100 shadow-xl availableproduct-container">
            <figure><img src={image} alt="furniture" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h6>Resale-Price: {resaleprice}</h6>
                <h6>Orginial-Price: {originalprice}</h6>
                <h6>years-of-use: {yearsofuse}</h6>
                <h6>Location: {location}</h6>
                <h6>Posted-Date: {Date}</h6>
                <h6>Seller-Name: {Date}</h6>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Availableproducts;