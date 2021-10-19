import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, []);
    return (
        <div>
            <Container className="mt-5">

                <Row xs={1} md={3} className="g-4">
                    {
                        doctors.map(doctor => <Col key={doctor._Id}>
                            <Card className="text-center doctor-card h-100">
                                <div className="mt-2">
                                    <img className="doctor-img" src={doctor.img} alt="" />
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{doctor.name}</Card.Title>
                                    <p>{doctor.specalist}</p>
                                    
                                    <Card.Text>
                                        <p>Country : {doctor.from}</p>
                                    </Card.Text>
                                    <div className="mt-auto ">

                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Doctors;