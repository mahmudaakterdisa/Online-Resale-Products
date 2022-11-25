import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div>
            <Carousel className='item-image'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/white-wall-living-room-have-sofa-decoration-3d-rendering_41470-3282.jpg?w=1380&t=st=1669312891~exp=1669313491~hmac=4d7237e424805c14325af5b91bc4a7f0868d3747661597c031203a825cc31da7"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/white-wall-living-room-have-sofa-decoration-3d-rendering_41470-3282.jpg?w=1380&t=st=1669312891~exp=1669313491~hmac=4d7237e424805c14325af5b91bc4a7f0868d3747661597c031203a825cc31da7"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/white-wall-living-room-have-sofa-decoration-3d-rendering_41470-3282.jpg?w=1380&t=st=1669312891~exp=1669313491~hmac=4d7237e424805c14325af5b91bc4a7f0868d3747661597c031203a825cc31da7"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;