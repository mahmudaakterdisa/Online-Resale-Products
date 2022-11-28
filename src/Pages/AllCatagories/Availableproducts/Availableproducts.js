import React from 'react';
import './Availableproducts.css';

const Availableproducts = ({ products, setFurniture }) => {

    const { image, name, resaleprice, originalprice, yearsofuse, location, Date, sallername } = products
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
                <h6>Seller-Name: {products.sallername ? sallername : 'Not found'}</h6>
                <div className="card-actions justify-end">


                    <label onClick={() => setFurniture(products)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Availableproducts;