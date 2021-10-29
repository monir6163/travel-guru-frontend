import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const googleRedirect = location?.state?.from || "/";
    const { signinGoogle, setIsLoading } = useAuth();
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <section className="login-height">
            <div className="container" >
                <div className="row mx-auto">
                    <div className="col-md-6 mx-auto p-3">
                        <h2 className="text-center mb-5 text-white">Login Now</h2>
                        <div className="mt-3 mb-3 text-center fs-4 fw-bolder" >
                            <Button onClick={handleGoogleLogin} variant="info"> {google}</Button>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default Login;