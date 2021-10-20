import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {

    const hospitalIcon = <FontAwesomeIcon icon={faClinicMedical} />
    return (
        <div className=" mt-5 view-btn text-light pt-5 pb-4">
            <Container>
                <Row>
                    <Col className="col-12 text-center col-md-4 footer-img mb-3">
                        <h1><span className="me-3">{hospitalIcon}</span>Medicare</h1>
                    </Col>

                   
                    <Col className="col-6 col-md-4 mb-3">
                        <Link className="text-decoration-none text-light footer-btn" to='/about'>About us</Link>
                        <br />
                        <Link className="text-decoration-none text-light footer-btn" to='/contact'>Contact us</Link>
                        <br />
                        <Link to='/terms' className="text-decoration-none text-light footer-btn" >Terms and Conditions</Link>
                        <br />
                        <Link to='/privacy' className="text-decoration-none text-light footer-btn">Privacy Policy</Link><br />
                        <Nav.Link className="footer-btn p-0 text-light text-decoration-none" as={HashLink} to="/home#service">service</Nav.Link>
                        <Nav.Link className="footer-btn p-0 text-light text-decoration-none" as={HashLink} to="/home#healthpackage">Health package</Nav.Link>
                        <Nav.Link className="footer-btn p-0 text-light text-decoration-none" as={HashLink} to="#menubar">Back to top</Nav.Link>
                        
                        

                    </Col>
                    <Col className="col-6 col-md-4">
                        <h3>Address</h3>
                        <p>Madi Care <br />
                            Medi Care Hospital <br />
                            Panthapath, Dhaka <br />
                            Phone : +2223333 (tol free) <br />
                            Email : medicare@org.com</p>

                    </Col>  



                </Row>
                <p className="text-center">Copyright © 2021 MediCare.com</p>
            </Container>

        </div>
    );
};

export default Footer;