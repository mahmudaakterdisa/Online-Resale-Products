import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Availablead from './Availablead';

const Advertise = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [getAdvertise, setGetAdvertise] = useState([]);


    useEffect(() => {
        fetch('https://y-omega-two.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setGetAdvertise(data))
    }, []);

    return (
        <div className='my-20'>


            <div className='mx-auto text-4xl font-serif text-center max-sm:w-3/4 underline' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                {
                    getAdvertise.length != 0 &&
                    <p>MÖBEL SPECIAL OFFERS</p>

                }
            </div>



            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 w-5/6 mx-auto gap-10'>
                {
                    getAdvertise.map((ad) =>
                        ad.advertise === 'yes' &&
                        <Availablead key={ad._id} ad={ad}></Availablead>)
                }
            </div>



        </div>






    );
};

export default Advertise;