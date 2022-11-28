import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/modern-style-kitchen-interior-design-with-red-black-wall3d-rendering_41470-4397.jpg?w=996&t=st=1669644375~exp=1669644975~hmac=d091dde91896d6a646fe526bf8b4053b6b04db4f64e0597ad5bb84bf6867f437" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/modern-living-room-interior-with-sofa-green-plants-lamp-table-dark-wall-background_41470-1528.jpg?w=1380&t=st=1669644046~exp=1669644646~hmac=a81db911a9fa52b390f26e992e76213a9651d94cdf23156fccdc1cc2e13afc01" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/mockup-living-room-interior-with-sofa-empty-dark-blue-wall-background-3d-rendering_41470-4236.jpg?w=1380&t=st=1669644580~exp=1669645180~hmac=39fd50a1a94a89edc2957e5043f8101a23faf5d97bd36891cb3ab02b54d46638" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?w=1380&t=st=1669644623~exp=1669645223~hmac=53e1b16947d22debccc9960e61b60508e75f545e55e4ed018b78febef4c695b7" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;