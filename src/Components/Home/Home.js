import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import { Card, Col, Container, Form, Row, Button, FormSelect, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Package from './Services/Package/Package';
import UsePackage from '../../Hooks/UsePackage';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        document.title = 'TravelGuru : Your Trusted Travel Partner'
    }, []);
    const [packages] = UsePackage();
    if (packages.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="success" />
            </div>
        );
    }

    const user = <FontAwesomeIcon icon={faUser} />
    return (
        <>
            <Banner />
            <section className="feture-container mt-5 mb-5">
                <div className="container">
                    <div className="sec-title text-center">
                        <p className="text-uppercase abril-font">TRAVEL SPECIALS</p>
                        <h2 className="text-uppercase abril-font mb-5">Why Travel with Tutive?</h2>
                    </div>
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src="https://i.ibb.co/dtpwfY3/feature-1.jpg" id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">2000+ Our Worldwide Guide</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src="https://i.ibb.co/xgV0c3d/feature-2.jpg" id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">100% Trusted Tour Agency</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src="https://i.ibb.co/zrnhP9P/feature-3.jpg" id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">12+ Years of Travel Experience</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src="https://i.ibb.co/7YnzQVq/feature-4.jpg" id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">100% of Our Travelers are Happy</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="about-container mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <div className="home-about">
                                <img className="img-fluid" src="https://i.ibb.co/nDqsbZH/about.png" alt="home-about" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="sec-title text-center">
                                <p className="text-uppercase abril-font">About TravelGruru</p>
                                <h2 className="text-uppercase abril-font mb-5">World Best Travel Agency Company Since 2021.</h2>
                                <p className="text-justify">
                                    Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.This was capitalized on by people like Thomas Cook selling tourism packages where trains and hotels were booked together.Travel may be local, regional, national (domestic) or international. In some countries, non-local internal travel may require an internal passport, while international travel typically requires a passport and visa. Tours are a common type of travel.
                                </p>
                                <Link to="/about">
                                    <Button className="mt-4 text-uppercase abril-font fw-bolder">{user} About US</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="booking-container mb-5">
                <Container className="text-center">
                    <div className="sec-title text-center">
                        <p className="text-uppercase abril-font">TRAVEL SPECIALS</p>
                        <h2 className="text-uppercase abril-font mb-5">Check Availability.</h2>
                    </div>
                    <Form className="shadow-lg p-5 rounded-3">
                        <Row className="g-0 g-3">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>CHECK-IN</p>
                                </div>
                                <input
                                    type="date"
                                    className="form-control px-md-5 shadow-none  mb-5 mb-md-0"
                                />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>CHECK-OUT</p>
                                </div>
                                <input
                                    type="date"
                                    className="form-control px-md-5 shadow-none mb-5 mb-md-0"
                                />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-user-friends mt-1 me-2"></i>
                                            <p>PERSON</p>
                                        </div>
                                        <FormSelect className="form-control shadow-none">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                        </FormSelect>
                                    </div>
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-map-marker-alt mt-1 me-2"></i>
                                            <p>CITY</p>
                                        </div>
                                        <FormSelect className="shadow-none form-control">
                                            <option value="new york">New York, America</option>
                                            <option value="Chicago, America">Chicago, America</option>
                                            <option value="Barcelona, Spain">Barcelona, Spain</option>
                                            <option value="Moscow, Russia">Moscow, Russia</option>
                                            <option value="Los Angels, America">Los Angels,America</option>
                                            <option value="Sorrent, Germany">Sorrent, Germany</option>
                                        </FormSelect>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
                                <Button
                                    onClick={(e) => e.preventDefault()}
                                    type="submit"
                                    className="py-3 px-3 mt-4 btn-light-green fw-bold border-0"
                                >
                                    Check Availability
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </Container>
            </section>
            <section className="package-container mb-5">
                <Container>
                    <div className="sec-title text-center">
                        <p className="text-uppercase abril-font">MODERN & BEAUTIFUL</p>
                        <h2 className="text-uppercase abril-font mb-5">Our Most Popular Packages</h2>
                    </div>
                    <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                        {
                            packages.map(service => <Package
                                key={service._id}
                                packages={service}
                            ></Package>)
                        }
                    </Row>
                </Container>
                <div className="d-flex justify-content-center mt-4">
                    <Link to="/packages">
                        <Button
                            className="btn-light-card fw-bold border-0"
                        >
                            See Our All Package
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="contact-container py-5">
                <Container>
                    <Row>
                        <div className="col-12 col-md-8 mx-auto">
                            <h2 className="text-center display-3 abril-font">
                                Get In Touch!
                            </h2>
                            <p className="text-cyan px-md-5 text-center mb-5">
                                Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 col-md-6">
                            <img
                                src="https://i.ibb.co/rs2fCR2/banner-1.jpg"
                                alt="contactImg"
                                className="img-fluid w-100 rounded-3"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <Form>
                                <Row>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="name" className="text-muted fw-semi-bold">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                            style={{ background: "#F8F8F8" }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="phone" className="text-muted fw-semi-bold">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                            style={{ background: "#F8F8F8" }}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <label htmlFor="email" className="text-muted fw-semi-bold">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                            style={{ background: "#F8F8F8" }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="message"
                                            className="text-muted fw-semi-bold"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                                            rows="3"
                                            style={{ background: "#F8F8F8" }}
                                        ></textarea>
                                    </div>
                                    <div className="col-12 text-center">
                                        <Button
                                            onClick={(e) => e.preventDefault()}
                                            type="submit"
                                            className="btn-light-green p-3 fw-bold border-0"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;