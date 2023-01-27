import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Banner.css';
import image from './Banner4.jpg'

const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='banner-container flex items-center'>

            <div className=' mx-auto  h-4/5 w-2/4 max-sm:h-3/5 max-lg:h-4/5 relative hometransparent-box rounded-none '>

                <div className='  w-full h-full   absolute '>
                    <div className='w-full h-full  max-sm:text-4xl md:text-black  font-bold font-serif py-36 max-sm:py-20 flex flex-col justify-center items-center'>
                        <div className='text-7xl max-sm:text-2xl text-black font-bold text-center font-serif' data-aos="fade" data-aos-easing="ease-in-sine" data-aos-delay="300" data-aos-duration="1500">
                            <p>Simply Buy <br /> Used Furniture</p>
                        </div>

                        <div className='text-3xl max-sm:xl text-yellow-200 font-semibold text-center my-5 font-serif' data-aos="fade" data-aos-easing="ease-in-sine" data-aos-delay="600" data-aos-duration="1500">
                            <p>With second-hand designer furniture</p>
                        </div>
                        <div className="card-actions sm:font-bold" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800">
                            <button className="btn btn-outline hover:btn-secondary rounded-none sm:text-xl">Shop Now</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;