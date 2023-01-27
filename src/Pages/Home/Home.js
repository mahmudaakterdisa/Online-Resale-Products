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


            <Banner></Banner>
            <Advertise></Advertise>

            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;