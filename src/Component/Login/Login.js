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
    return (
        <Container className="text-center mt-5 ">
            <form onSubmit={handleLogin} className="login-from mx-auto">
                <h3 className="text-start mb-3">Login</h3>
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                    <input type="email" onBlur={handleEmailChange} className="form-control form-control-lg" placeholder="email address" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                    <input type="password" onBlur={handlePasswordChange} placeholder="password" className="form-control form-control-lg" id="exampleInputPassword1" required />
                    <p className="text-start text-danger">{error}</p>
                </div>
                <div className="text-start mb-3">
                    {/* <Link onClick={() => setIsLogin(!isLogin)}  to="/register">new user ?</Link> */}
                    <Link onClick={handleError} to="/register">new user ?</Link>
                </div>
                <button type="submit" value="Submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="login-from mx-auto mt-3">
                <p>or</p>
                <button onClick={handleGoogleLogin} className="google-btn btn w-100">Continue with google</button>
            </div>
        </Container>
    );
};

export default Login;