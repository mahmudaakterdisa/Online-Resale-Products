
import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Authcontext } from '../../Shared/Authprovider/Authprovider';

const Bookingmodals = ({ furniture, setFurniture }) => {
    console.log(furniture);
    const { name, resaleprice } = furniture
    const { user } = useContext(Authcontext)

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const price = form.price.value;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const productname = form.productname.value;
        // console.log(date, price, username, email, phone, location, productname);

        const booking = {
            bookingDate: date,
            productName: productname,
            userName: username,
            productPrice: price,
            email: email,
            phoneNumber: phone,
            meetingLocation: location,
        }

        fetch('https://y-omega-two.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setFurniture(null);
                    toast.success('Booked');
                }

            })

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
                        <input name='productname' defaultValue={name} readOnly type="text" placeholder="name" className="input input-bordered input-primary w-full " />
                        <input name='price' defaultValue={resaleprice} readOnly type="text" placeholder="price" className="input input-bordered input-primary w-full " />
                        <input name='username' defaultValue={user?.displayName} readOnly type="text" placeholder="user-name" className="input input-bordered input-primary w-full " />
                        <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="email-address" className="input input-bordered input-primary w-full " />
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