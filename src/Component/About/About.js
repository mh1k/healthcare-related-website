import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div>
            <Container>
                <h2 className=" mt-4  fw-bold title-service">About us</h2>
                <hr  className="mb-5" />
                <h1 className=" mt-4 p-2 mb-4 text-center fw-bold mission-vision">Mission And Vision</h1>
                <Row className="p-4 g-4">
                    <div className="col-md-6 p-3 shadow">
                        <h3>Vision</h3>
                        <p>To be on a planet devoid of the distressed and the diseased;</p>
                        <p>To be at the level where help is sought to save lives;</p>
                        <p>To be an institution that rises above pettiness to help humanity;</p>
                    </div>
                    <div className="col-md-6 p-3 shadow ">
                        <h3>Mission</h3>
                        <p>To become the most trusted premier institution serving the</p>
                        <p>sufferings of humanity and people’s welfare oriented activities.</p>
                    </div>

                </Row>
            </Container>
        </div>
    );
};

export default About;