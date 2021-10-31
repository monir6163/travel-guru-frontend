import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import UsePackage from '../../../Hooks/UsePackage';
import Package from './Package/Package';

const Packages = () => {
    useEffect(() => {
        document.title = 'AllPackages : Your Trusted Travel Partner'
    }, []);
    const [packages] = UsePackage();
    return (
        <section className="package-container mt-5 mb-5" data-aos="fade-up">
            <Container>
                <div className="sec-title text-center">
                    <p className="text-uppercase abril-font">MODERN & BEAUTIFUL</p>
                    <h2 className="text-uppercase abril-font mb-5">Our Most Popular Packages</h2>
                </div>
                {packages.length === 0 ? <div style={{ minHeight: '50vh' }} className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="success" />
                </div> :
                    <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                        {
                            packages.map(service => <Package
                                key={service._id}
                                packages={service}
                            ></Package>)
                        }
                    </Row>
                }
            </Container>
        </section>
    );
};

export default Packages;