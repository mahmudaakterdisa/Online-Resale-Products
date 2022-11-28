import React from 'react';

const Testimonial = () => {
    return (
        <div className="hero max-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?w=1380&t=st=1669644623~exp=1669645223~hmac=53e1b16947d22debccc9960e61b60508e75f545e55e4ed018b78febef4c695b7")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">OUR TESTIMONIAL</h1>
                    <p className="mb-5">I worry about ordering online but the returns policy is great if you are not happy.And we were very happy. Bed is look like new and easy to construct</p>
                    <h6>Darrel Austin</h6>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;