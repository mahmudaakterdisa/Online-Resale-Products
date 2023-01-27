import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="hero max-h-screen mb-20" style={{ backgroundImage: `url("https://i.ibb.co/7gTrmzf/7043473-780.jpg")` }} data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="900">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md font-serif">
                    <p className="mb-5 text-5xl max-lg:text-2xl font-bold">OUR TESTIMONIAL</p>
                    <p className="mb-5 max-lg:text-2xl">I worry about ordering online but the returns policy is great if you are not happy.And we were very happy. Bed is look like new and easy to construct</p>
                    <h6>Darrel Austin</h6>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;