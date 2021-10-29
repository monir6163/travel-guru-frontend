import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Showorder from './Showorder/Showorder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        document.title = "My Orders | TravelGuru";
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user?.email]);
    if (myOrders.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="success" />
            </div>
        );
    }
    return (
        <Container className="mb-5" style={{ minHeight: '100vh' }}>
            <div className="col-12 col-md-8 mx-auto">
                <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">My Orders List</h3>
            </div>
            <Row xs={1} md={2} lg={3} className="g-5">
                {
                    myOrders.map(orders => <Showorder
                        key={orders._id}
                        orders={orders}
                    ></Showorder>)
                }
            </Row>
        </Container>
    );
};

export default MyOrders;