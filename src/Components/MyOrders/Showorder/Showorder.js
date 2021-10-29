import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Showorder = (props) => {
    const clock = <FontAwesomeIcon icon={faClock} />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const { _id, title, location, duration, price, description, img, status } = props.orders;
    console.log(props.orders);
    // delete 
    const handleDelete = (ID) => {
        const url = `http://localhost:5000/deleteorder/${ID}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
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
                        <span className="fw-bold">{map}{" "}{location}</span>

                    </div>
                    <div className="justify-content-center mt-2">
                        <span className="fw-bold"><span className="price fs-6 fw-bolder"><span className="fs-5 fw-bolder">Order-Status:</span> {status}</span></span>

                    </div>
                    <Card.Title className="pt-3 fw-bolder">{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 126)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => handleDelete(_id)}
                            className="btn-light-card fw-bold border-0"
                        >
                            Delete Package
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Showorder;