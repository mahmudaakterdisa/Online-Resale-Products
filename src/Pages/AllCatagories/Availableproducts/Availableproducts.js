import React, { useEffect } from 'react';
import './Availableproducts.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Availableproducts = ({ products, setFurniture }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { catagory_name, image, name, resaleprice, originalprice, yearsofuse, location, Date, sallername } = products
    return (


        <div className="card w-auto bg-base-100 shadow-xl font-serif rounded-none" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="900">
            <figure><img className=' h-60 w-full' src={image} alt="furniture" /></figure>
            <div className="card-body flex flex-col items-start">
                <h2 className="card-title">{name}</h2>
                <h6>Resale-Price: {resaleprice}$</h6>
                <h6>Orginial-Price: {originalprice}$</h6>
                <h6>years-of-use: {yearsofuse}</h6>
                <h6>Location: {location}</h6>
                <h6>Posted-Date: {Date}</h6>
                <h6>Seller-Name: {products.sallername ? sallername : 'Not found'}</h6>
                <div className="card-actions justify-end">


                    <label onClick={() => setFurniture(products)} htmlFor="booking-modal" className="btn btn-outline hover:btn-secondary">Book Now</label>
                </div>
            </div>
        </div>

    );
};

export default Availableproducts;