import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleEmailChange, handlePasswordChange, handleRegistration, signInUsingGoogle, handleNameChange, error,handleError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    
    return (
        <Container className="text-center mt-5 ">
            <form onSubmit={handleRegistration} className="login-from mx-auto">
                <h3 className="text-start mb-3">Register</h3>

                {/* Input Name */}
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                    <input type="text" className="form-control form-control-lg" onBlur={handleNameChange} placeholder="Full name" required id="userName" />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                    <input type="email" className="form-control form-control-lg" placeholder="email address" id="exampleInputEmail1" onBlur={handleEmailChange} required aria-describedby="emailHelp" />
                </div>

                {/* Input Password */}
                <div className="mb-3">
                    {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                    <input type="password" onBlur={handlePasswordChange} placeholder="password" className="form-control form-control-lg" required id="exampleInputPassword1" />

                    <p className="text-start text-danger">{error}</p>

                </div>

                {/* toggle for login */}
                <div className="text-start mb-3">
                    <Link onClick={handleError} to='/login'>already Registered ?</Link> {/* handle error for error message clear */}
                    {/* <Link onClick={() => setIsLogin(!isLogin)} to='/login'>already Registered ?</Link> */}
                </div>
                <button type="submit" value="Submit" className="btn btn-primary w-100">Register</button>
                
            </form>

            {/* google sign in */}
            <div className="login-from mx-auto mt-3">
                    <p>or</p>
                    <button onClick={handleGoogleLogin} className="google-btn btn w-100"><span className="me-2">{googleIcon}</span>Continue with google</button>
                </div>
        </Container>
    );
};

export default Register;