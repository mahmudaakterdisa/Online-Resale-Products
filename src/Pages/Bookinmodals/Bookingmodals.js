
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Bookingmodals = ({ furniture }) => {
    console.log(furniture);
    const { name } = furniture

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const price = form.price.value;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(date, price, username, email, phone, location)
    }

    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <label for="start"></label>

                        <input name='date' type="date" className="input input-bordered input-primary w-full " />
                        <input name='price' type="text" placeholder="price" className="input input-bordered input-primary w-full " />
                        <input name='username' type="text" placeholder="user-name" className="input input-bordered input-primary w-full " />
                        <input name='email' type="email" placeholder="email-address" className="input input-bordered input-primary w-full " />
                        <input name='phone' type="text" placeholder="Phone-Number" className="input input-bordered input-primary w-full " />
                        <input name='location' type="text" placeholder="Meeting-Location" className="input input-bordered input-primary w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        <br />
                        <input className='btn btn-primary w-full ' type="submit" value='Submit' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodals;