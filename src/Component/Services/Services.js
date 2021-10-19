import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    return (
        <div>
            <Container id="service" className="mt-5 mb-5">
                <h2 className=" mt-4  fw-bold title-service">Our Services</h2>
                <hr className="mb-5" />

                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Col key={service.service_id}>
                            <Card className="d-flex flex-row align-items-center p-3  h-100">
                                <div className="me-3">
                                    <img className="service-img" src={service.img} alt="" />
                                </div>
                                <div className="d-flex flex-column">
                                    <Card.Title>{service.serviceName}</Card.Title>
                                    <div className="mt-auto ">
                                        <Link to={`/service/${service.service_id}`}><button className="servicesBtn">Details</button></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Services;