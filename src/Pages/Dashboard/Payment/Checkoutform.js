import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const Checkoutform = ({ getpaymentData }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { productPrice, userName, email, _id, productName } = getpaymentData;

    console.log(getpaymentData);


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(" https://y-omega-two.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }

        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {


            //store payment info in database
            const payment = {

                productPrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }

            fetch('https://y-omega-two.vercel.app/payments', {

                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },

                body: JSON.stringify(payment)
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! payment completed successfully');
                        setTransactionId(paymentIntent.id);
                    }
                })




        }
        setProcessing(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline hover:btn-secondary font-serif mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
                    PAY
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div className=' font-serif'>
                    <p className='text-green-500 font-serif'>{success}</p>
                    <p>Your transactionId: <span className='font-bold font-serif'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default Checkoutform;