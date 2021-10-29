import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UsePackage from '../../../Hooks/UsePackage';
import Package from './Package/Package';

const Packages = () => {
    const [packages] = UsePackage();
    console.log(packages);
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
                            packages={service}
                        ></Package>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Packages;