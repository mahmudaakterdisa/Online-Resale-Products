import React, { useEffect, useState } from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from './Banner/Banner';


import './Home.css'
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-omega-two.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='home-container'>

            <div className='banner-container'>
                <Banner></Banner>
            </div>


            <div className='catagories-container'>
                <div className='ctagories-text'>
                    <h1 className='text-4xl'>Available Catagories</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 '>


                    {
                        services.map(service => <Services key={service._id} service={service}></Services>)

                    }
                </div>


                <div>
                    <Advertise></Advertise>
                </div>
                <div className='testimonial-conatiner'>
                    <Testimonial></Testimonial>
                </div>

            </div>


        </div>
    );
};

export default Home;