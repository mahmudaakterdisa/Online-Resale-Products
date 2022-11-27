import React, { useEffect, useState } from 'react';
import Availablead from './Availablead';

const Advertise = () => {

    const [getAdvertise, setGetAdvertise] = useState([]);


    useEffect(() => {
        fetch('https://y-omega-two.vercel.app/advertise')
            .then(res => res.json())
            .then(data => setGetAdvertise(data))
    }, []);

    return (
        <div className='mt-20'>

            {
                getAdvertise.length > 0 &&
                <h1 className='text-4xl'>Available Advertise</h1>
            }


            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-20 lg:ml-40'>
                {
                    getAdvertise.map((ad) => <Availablead key={ad._id} ad={ad}></Availablead>)
                }
            </div>



        </div>






    );
};

export default Advertise;