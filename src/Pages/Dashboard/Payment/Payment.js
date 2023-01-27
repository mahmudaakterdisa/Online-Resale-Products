import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkoutform from './Checkoutform';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const getpaymentData = useLoaderData();
    console.log("booking data", getpaymentData);
    const { bookingDate, email, meetingLocation, phoneNumbe, productName, productPrice, userName } = getpaymentData
    return (
        <div className='flex flex-col justify-center items-center my-20'>

            <h1 className='text-3xl text-center font-serif font-bold'>Payment For {productName}</h1>
            <p className='text-xl my-10 text-center font-serif font-bold'>Please Pay <strong className='text-zinc-700'>${productPrice}</strong> For Your {productName}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkoutform
                        getpaymentData={getpaymentData}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;