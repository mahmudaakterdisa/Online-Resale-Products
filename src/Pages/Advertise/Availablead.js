import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Availablead = ({ ad }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="card  bg-base-100 shadow-xl mt-5 rounded-none" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="900">
            <figure><img className=' h-60 w-full rounded-none' src={ad.image} alt="advertise" /></figure>
            <div className="card-body bg-zinc-400 text-center text-white">
                <p className='text-2xl font-semibold font-sans'>{ad.catagory_name}</p>

            </div>
        </div>
    );
};

export default Availablead;