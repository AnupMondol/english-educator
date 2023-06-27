import React from 'react';
import style from './footer.css'
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <div className="container">
                    <div className='row g-5 justify-content-evenly'>
                        <div className="col-lg-6 left">
                            <div className="about-info p-3">
                                <h2 className='text-white'> English Educator</h2>
                                <br />
                                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.</p>
                                <br />
                                <h4 className='text-white'>Stay In Touch</h4>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <div className='row g-0'>
                                    <div className='col-6 col-md-5'>
                                        <div className="information">
                                            <h5 className='text-white'>Newsletter</h5>
                                            <br />
                                            <h6 className='text-white'>You may unsubscribe at any moment. For that purpose, please find our contact.</h6>
                                            <br />
                                            <input type="text" />

                                            <Button className='footer-button' variant="outline-warning">Submit</Button>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className='col-6 col-md-7'>
                                        <div className="information2">
                                            <h5 className='text-white'>Information</h5>
                                            <h6>Delivery</h6>
                                            <h6>About Us</h6>
                                            <h6>Secure Payment</h6>
                                            <h6>Contact Us</h6>
                                            <h6>Sitemap</h6>
                                            <h6>Stores</h6>
                                        </div>
                                    </div>
                                    
                                </div>
                                <br />
                                    <h6>All rights reserved in English Educator</h6>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;