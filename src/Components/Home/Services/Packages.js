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
    if (packages.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="success" />
            </div>
        );
    }
    return (
        <section className="package-container mt-5 mb-5">
            <Container>
                <div className="sec-title text-center">
                    <p className="text-uppercase abril-font">MODERN & BEAUTIFUL</p>
                    <h2 className="text-uppercase abril-font mb-5">Our Most Popular Packages</h2>
                </div>
                <Row xs={1} md={2} lg={3} xl={3} className="g-5">
                    {
                        packages.map(service => <Package
                            key={service._id}
                            packages={service}
                        ></Package>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Packages;