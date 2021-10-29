import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import './Header.css';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    // const activeMenu = {
    //     fontWeight: "bold",
    //     color: "#4fc9e0!important"
    // }
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { displayName, photoURL } = user;
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({})
                Swal.fire(
                    "Good job!",
                    "Log Out SuccessFull!",
                    "success"
                )
                history.push(redirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
            <Navbar className="nav-bg" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={NavLink} to="/">
                            <img className="logo-image" src="https://i.ibb.co/7Wjpyd7/pngegg.png" alt="Taravel-Guru" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="fs-6 fw-bold px-3 text-white abril-font">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="fs-6 fw-bold px-3 text-white abril-font">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/packages" className="fs-6 fw-bold px-3 text-white abril-font">Packages</Nav.Link>
                            {!user.displayName ? (
                                <>
                                    <Nav.Link as={NavLink} to="/login" className="fs-6 fw-bold px-3 abril-font">
                                        <Button className="text-btn fs-6 fw-bold text-uppercase">
                                            Login
                                        </Button>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/myorders" className="fs-6 fw-bold px-3 text-white abril-font">My Orders</Nav.Link>
                                    <Nav.Link as={NavLink} to="/all-orders" className="fs-6 fw-bold px-3 text-white abril-font">Manage All Orders</Nav.Link>
                                    <Nav.Link as={NavLink} to="/addpackage" className="fs-6 fw-bold px-3 text-white abril-font">Add Package</Nav.Link>
                                    <NavDropdown
                                        title={
                                            <img
                                                style={{
                                                    width: "45px",
                                                    borderRadius: "50%",
                                                }}
                                                src={photoURL}
                                                alt=""
                                            />
                                        }
                                    >
                                        <div className="text-center">
                                            <h6>{displayName}</h6>
                                            <button onClick={handleLogout} className="btn btn-primary text-uppercase">
                                                Log Out
                                            </button>
                                        </div>
                                    </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;