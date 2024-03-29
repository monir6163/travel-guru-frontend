import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AddOrders = () => {
    useEffect(() => {
        document.title = "AddOrders : Your Trusted Travel Partner";
    }, []);
    const { user } = useAuth();
    const { bookid } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(
            `https://travel-guru-backend-production.up.railway.app/orders/${bookid}`
        )
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [bookid]);
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        data.status = "pending";
        data.email = user?.email;
        data.order = orders;
        fetch(
            "https://travel-guru-backend-production.up.railway.app/placeorders",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => {
                if (res) {
                    Swal.fire("WoW!", "Package Book SuccessFull!", "success");
                    reset();
                }
                history.push("/myorders");
            })
            .catch((error) => {
                Swal.fire("Something went wrong!", `${error.message}`, "error");
            });
        console.log(data);
    };
    return (
        <section>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <h2 className="text-center">Order Place Form</h2>
                        <form
                            className="shadow-lg px-2 px-md-5 py-3 mt-5 text-cyan"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        readOnly
                                        defaultValue={user?.displayName}
                                        className="text-secondary fw-semi-bold"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>User Email</Form.Label>
                                    <Form.Control
                                        readOnly
                                        defaultValue={user?.email}
                                        className="text-secondary fw-semi-bold"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        placeholder="Dhaka"
                                        className="text-secondary fw-semi-bold"
                                        {...register("address", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="+880 1747706163"
                                        className="text-secondary fw-semi-bold"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                            </Row>
                            <div className="mt-3 text-center">
                                <Button
                                    type="submit"
                                    className="px-3 py-2 fw-bold btn-light-green"
                                >
                                    Place Order
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-12">
                        <h2 className="text-center mt-3">Order Details</h2>
                        <div className="shadow-lg px-2 px-md-5 py-3 mt-5">
                            <h5>
                                <span className="fw-bolder">Title:</span>{" "}
                                {orders.title}
                            </h5>
                        </div>
                        <div className="shadow-lg px-2 px-md-5 py-3 mt-3">
                            <h5>
                                <span className="fw-bolder">Location:</span>{" "}
                                {orders.location}
                            </h5>
                        </div>
                        <div className="shadow-lg px-2 px-md-5 py-3 mt-3">
                            <h5>
                                <span className="fw-bolder">Price:</span> $
                                {orders.price}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddOrders;
