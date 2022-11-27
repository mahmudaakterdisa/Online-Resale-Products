import React from 'react';

const Availablead = ({ ad }) => {
    console.log(ad);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={ad.image} alt="advertise" /></figure>
            <div className="card-body">
                <h2 >{ad.catagory_name}</h2>
                <h3>Product: {ad.productName}</h3>
                <h3>Resale Price: {ad.resaleprice}</h3>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Availablead;