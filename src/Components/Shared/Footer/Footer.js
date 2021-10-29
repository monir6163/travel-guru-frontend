import React from 'react';
import { FormControl, InputGroup, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div
            style={{ backgroundColor: "#061a3a" }}
            className="text-white"
        >
            <div className="container">
                <div className="row pt-4 pb-2">
                    <div className="col-12 col-md-6 col-lg-3 mb-4 text-center">
                        <img style={{ maxWidth: "150px", width: "100%" }} className='mb-3' src="https://i.ibb.co/7Wjpyd7/pngegg.png" alt="TravelGuru" />
                        <p className="text-justify abril-font">
                            Millions of people of all ages and from around the
                            world are improving their lives with us.We work with
                            a passion of taking challenges and creating new ones
                            in advertising sector.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 text-center abril-font">
                        <h4>Top Services</h4>
                        <span>ENGINE DIAGNOSTIC</span>
                        <br />
                        <span>WHEEL ALIGNMENT</span>
                        <br />
                        <span>OIL CHANGING</span>
                        <br />
                        <span>BRAKE REPAIRING</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 text-center abril-font">
                        <h4>Quic Links</h4>
                        <Nav.Link as={NavLink} to="/home" className="fs-6 fw-bold px-3 text-white">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="fs-6 fw-bold px-3 text-white">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="fs-6 fw-bold px-3 text-white">Services</Nav.Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 text-center abril-font">
                        <h4>Follow us</h4>
                        <p>
                            Subscribe our Youtube channel to get our latest
                            update & news
                        </p>
                        <div className="d-flex justify-content-around">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-2x fa-facebook-square text-white"></i>
                            </a>
                            <a href="https://www.linkedin.com/signup">
                                <i className="fab fa-2x fa-linkedin text-white"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en">
                                <i className="fab fa-2x fa-twitter-square text-white"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                                <i className="fab fa-2x fa-youtube text-white"></i>
                            </a>
                        </div>
                        <div className="mt-3">
                            <h4>Subscibe Now</h4>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button onClick={(e) => { e.preventDefault() }} id="button-addon2">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="abril-font">
                                Copyright &copy; 2021.<span
                                    style={{ color: "#ff7c5b" }}
                                    className=" mt-2"
                                > {" "} Travel-Gruru.
                                </span> All rights reserved.
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="text-center abril-font">
                                <span className="text-center"> <p>This Site Developed by {" "} <span style={{ color: '#ff7c5b' }}>Monir Hossain.</span>.
                                </p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;