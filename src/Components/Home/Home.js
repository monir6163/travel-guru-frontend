import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import feture1 from '../../image/travel/feature-1.jpg';
import feture2 from '../../image/travel/feature-2.jpg';
import feture3 from '../../image/travel/feature-3.jpg';
import feture4 from '../../image/travel/feature-4.jpg';
import { Card, Col, Container, Form, Row, Button, FormSelect } from 'react-bootstrap';

const Home = () => {
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
                                <Card.Img variant="top" className="overflow-hidden" src={feture1} id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">2000+ Our Worldwide Guide</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src={feture2} id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">100% Trusted Tour Agency</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src={feture3} id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">12+ Years of Travel Experience</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-border shadow-lg">
                                <Card.Img variant="top" className="overflow-hidden" src={feture4} id='cardimg' />
                                <Card.Body className="text-center">
                                    <Card.Title className="feuture-title">100% of Our Travelers are Happy</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
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
                    <Row xs={1} md={2} lg={3} xl={3} className="g-5">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Col>
                                <Card className="h-100 card-border shadow-lg">
                                    <Card.Img variant="top" src={feture1} />
                                    <Card.Body className="overflow-hidden text-center">
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold">5 days</span>
                                            <span className="fw-bold"><span className="price">$270</span> / Per Person</span>
                                        </div>
                                        <Card.Title className="pt-3 fw-bolder">Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="bg-white">
                                        <div className="d-flex justify-content-center">
                                            <Button
                                                className="btn-light-card fw-bold border-0"
                                            >
                                                Book Package
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;