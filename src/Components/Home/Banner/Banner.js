import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Banner = () => {
    const user = <FontAwesomeIcon icon={faUser} />
    return (
        <section className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <div className="overly"></div>
                        <div className="banner-text">
                            <div className="text-center">
                                <h2 className="text-white fw-bolder fs-1 abril-font"><span style={{ color: '#5DADE2' }}>Let's Start</span> Your Journey Safe & Secure with us!</h2>
                                <Link to="/about">
                                    <Button className="mt-4 text-uppercase abril-font fw-bolder">{user} About US</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;