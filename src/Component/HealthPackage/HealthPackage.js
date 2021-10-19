import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./HealthPackage.css"

const HealthPackage = () => {
    const [packages, setPackage] = useState([])
    useEffect(() => {
        fetch('./healthcheck.json')
            .then(res => res.json())
            .then(data => setPackage(data))

    }, []);
    return (
        <div>
            <Container className="mt-5 mb-5">
                <h2 className=" mt-4  fw-bold title-service">Health Cheack Package</h2>
                <hr className="mb-5" />

                <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(packag => <Col key={packag.pakage_id}>
                            <Card className="card-border">
                                <Card.Img variant="top card-img" src={packag.img} />
                                <Card.Body className="text-center">
                                    <Card.Title>{packag.pakageName}</Card.Title>
                                    <p>{packag.gender} | $ {packag.Price}</p>
                                </Card.Body>
                                <div className="view-btn p-1 text-center">
                                    <Link to='/viewDetails' className="text-decoration-none text-light ">View Details</Link>
                                </div>
                            </Card>
                        </Col>)
                    }
                </Row>

            </Container>

        </div>
    );
};

export default HealthPackage;