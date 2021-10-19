import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css'

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className="view-btn" variant="dark">
                <Container>
                    <Link className="py-2 me-5 h3 text-decoration-none text-light" to="/">MediCare</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-decoration-none text-light me-3 nav-link" to="/home">Home</Link>
                            {/* <Link className="text-decoration-none text-light me-3 nav-link" to="/services"></Link> */}
                            <Link className="text-decoration-none text-light me-3 nav-link" to="/doctor">Doctor</Link>
                            <Link className="text-decoration-none text-light me-3 nav-link" to="/contact">Contact</Link>


                        </Nav>
                        <Nav>
                            {
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                user.email ? <div className="d-flex align-items-center"><span className="me-3 text-decoration-none text-light">{user.displayName}</span><a className="text-decoration-none me-4 nav-link" onClick={logOut}>Logout</a></div>
                                    :
                                    <Link className="text-decoration-none me-4 text-light nav-link " to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;