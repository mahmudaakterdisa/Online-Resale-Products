import React, { useEffect } from 'react';
import css from './CatBanner.css';
import AOS from "aos";
import "aos/dist/aos.css";

const CatBanner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='categories-banner flex items-center'>
            <div className=' mx-auto  h-4/5 w-2/4 relative transparent-box rounded-none'>

                <div className='  w-full h-full   absolute ' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                    <div className='w-full h-full max-sm:h-2/4 text-7xl max-sm:text-4xl md:text-black  font-bold font-serif py-36 max-lg:py-48 break-normal'>
                        <p>Decorate Your <br /><span>Home In</span> <br /><span className=' text-yellow-200'>Your Budget</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatBanner;