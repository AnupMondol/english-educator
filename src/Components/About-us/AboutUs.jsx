import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import aboutTopImage from '../../../public/aboutTop.jpg'
import style from './anout.css';
import image5 from '../../../public/thankYou.jpg'

const AboutUs = () => {
    return (
        <div>
            <div>
                <Image className='image-section' src={aboutTopImage} />
                <h1 className='heading text-dark'>About Us</h1>
            </div>

            <Container>
                <div className="yeallow-bg">
                    <div className="container">
                        <div className='row g-5 justify-content-evenly'>
                            <div className="col-lg-6">
                                <div className="about-info p-3">
                                    <h2 className='text-danger'>About Us</h2>
                                    <br />
                                    <h4 className='text-primary'>Be <strong>Creative</strong></h4>
                                    <br />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa distinctio modi explicabo maiores atque accusantium assumenda, deserunt laborum corporis fugiat eaque sapiente, expedita, perspiciatis repellendus consequatur in dolorum ullam sint.</p>
                                    <br />
                                    <h4 className='text-primary'>Stay In Touch</h4>
                                    
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='p-3'>
                                    <h2 className='text-danger'>Contact Us</h2>
                                    <br />
                                    <h5><strong className='text-primary'>Facebook : </strong> www.</h5>
                                    <br />
                                    <h5><strong className='text-danger'>Instagram : </strong> www.</h5>
                                    <br />
                                    <h5><strong className='text-primary'>Gmail :</strong> englisheducator@gmail.com</h5>
                                    <br />
                                    <h5><strong className='text-success'>Website :</strong> englisheducator@gmail.com</h5>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </Container>

            <Container className='card-teacher'>
                <Card className=" text-dark">
                    <img className='card-image' src={image5} alt="" />
                    <Card.ImgOverlay className='card-thank'>
                        <Card.Title> <h1 className='text-dark'>Thank You</h1> </Card.Title>
                        
                        <Card.Text>
                            <h2 className='text-dark'>Visit Again</h2>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>


        </div>
    );
};

export default AboutUs;