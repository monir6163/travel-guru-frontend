import React, { useEffect } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const About = () => {
    useEffect(() => {
        document.title = 'About : Your Trusted Travel Partner'
    }, []);
    return (
        <section className="about-container mb-5 mt-5" data-aos="fade-up">
            <div className="container">
                <div className="sec-title text-center">
                    <p className="text-uppercase abril-font">About TravelGruru</p>
                    <h2 className="text-uppercase abril-font mb-5">WE ARE TravelGuru.</h2>
                </div>
                <div className="row">
                    <div className="col-md-7 col-12">
                        <div className="home-about">
                            <img className="img-fluid rounded-3" src="https://i.ibb.co/FHMx8qJ/about.jpg" alt="home-about" />
                        </div>
                    </div>
                    <div className="col-md-5 col-12 mt-4">
                        <div className="sec-title text-center">
                            <p className="text-uppercase abril-font">About TravelGruru</p>
                            <h2 className="text-uppercase abril-font mb-5">World Best Travel Agency Company Since 2021.</h2>
                            <p className="text-justify">
                                Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.This was capitalized on by people like Thomas Cook selling tourism packages where trains and hotels were booked together.Travel may be local, regional, national (domestic) or international. In some countries, non-local internal travel may require an internal passport, while international travel typically requires a passport and visa. Tours are a common type of travel.
                            </p>
                            <Link to="/packages">
                                <Button className="mt-4 text-uppercase abril-font fw-bolder">See Pakages</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;