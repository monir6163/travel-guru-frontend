import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Package.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Package = (props) => {
    const clock = <FontAwesomeIcon icon={faClock} />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const { title, location, duration, price, description, img } = props.packages;
    return (
        <Col>
            <Card className="h-100 card-border shadow-lg">
                <Card.Img className="overflow-hidden" variant="top" src={img} id='cardimg' />
                <Card.Body className="overflow-hidden text-center">
                    <div className="d-flex justify-content-between">
                        <span className="fw-bold">{clock}{" "}{duration}{" "}Days / Night</span>
                        <span className="fw-bold"><span className="price">${price}</span> / Per Person</span>
                    </div>
                    <div className="justify-content-center mt-2">
                        <span className="fw-bold">{map}{" "}{location.slice(0, 30)}</span>
                    </div>
                    <Card.Title className="pt-3 fw-bolder">{title.slice(0.26)}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 120)}
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
    );
};

export default Package;