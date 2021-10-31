import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Package.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const clock = <FontAwesomeIcon icon={faClock} />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const { _id, title, location, duration, price, description, img } = props.packages;
    return (
        <Col>
            <Card className="h-100 card-border shadow-lg">
                <div>
                    <Card.Img className="overflow-hidden" variant="top" src={img} id='cardimg' />
                </div>
                <Card.Body className="overflow-hidden text-center">
                    <div className="d-flex justify-content-between">
                        <span className="fw-bold">{clock}{" "}{duration}{" "}Days / Night</span>
                        <span className="fw-bold"><span className="price">${price}</span> / Per Person</span>
                    </div>
                    <div className="justify-content-center mt-2">
                        <span className="fw-bold">{map}{" "}{location}</span>
                    </div>
                    <Card.Title className="pt-3 fw-bolder">{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 126)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="d-flex justify-content-center">
                        <Link to={`/addorders/${_id}`}>
                            <Button
                                className="btn-light-card fw-bold border-0"
                            >
                                Book Package
                            </Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Package;