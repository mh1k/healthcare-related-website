import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleEmailChange, handlePasswordChange, signInUsingGoogle, handleLogin, error, handleError, } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }

    const googleIcon = <FontAwesomeIcon icon={faGoogle} /> /* google Icon */
    return (
        <Container className="text-center mt-5 ">
            <form onSubmit={handleLogin} className="login-from mx-auto">
                <h3 className="text-start mb-3">Login</h3>

                {/* Input email address */}
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                    <input type="email" onBlur={handleEmailChange} className="form-control form-control-lg" placeholder="email address" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>

                {/* Input Password */}
                <div className="mb-3">
                    {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                    <input type="password" onBlur={handlePasswordChange} placeholder="password" className="form-control form-control-lg" id="exampleInputPassword1" required />
                    <p className="text-start text-danger">{error}</p>
                </div>

                {/* toggle for register */}
                <div className="text-start mb-3">
                    {/* <Link onClick={() => setIsLogin(!isLogin)}  to="/register">new user ?</Link> */}
                    <Link onClick={handleError} to="/register">new user ?</Link> {/* handle error for error message clear */}
                </div>
                <button type="submit" value="Submit" className="btn btn-primary w-100">Login</button>
            </form>

            {/* google sign in */}
            <div className="login-from mx-auto mt-3">
                <p>or</p>
                <button onClick={handleGoogleLogin} className="google-btn btn w-100"><span className="me-2">{googleIcon}</span>Continue with Google</button>
            </div>
        </Container>
    );
};

export default Login;