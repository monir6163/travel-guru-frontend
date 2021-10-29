import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        document.title = 'Login : Your Trusted Travel Partner'
    }, []);
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

            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <section className="login-bg">
            <div className="container" >
                <div className="row mx-auto">
                    <div className="col-md-6 col-12 mx-auto">
                        <div className="mt-3 mb-3 text-center fs-4 fw-bolder shadow-lg p-5 rounded-3 login-btn" >
                            <Button className="fw-bolder btn-google btn-lg border-0" onClick={handleGoogleLogin}>
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Signup Using Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default Login;