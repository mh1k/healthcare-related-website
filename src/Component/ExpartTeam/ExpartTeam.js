import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const ExpartTeam = () => {

    const userIcon = <FontAwesomeIcon icon={faUserMd} />
    return (
        <Container className="my-5">
            <h2 className=" mt-4  fw-bold title-service"><span className="me-3">{userIcon}</span>Expert Team</h2>
            <hr className="mb-5" />
            <Row xs={1} md={2}>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h3 className="text-center mb-3">
                            A team of <br /> experts on your <br /> side
                        </h3>
                        <img src="https://s3.amazonaws.com/images.teladoc.com/www/2019/landing-pages/bdstart/icon-specialist-50mil.svg" alt="" />
                        <p className="text-center mb-3">1000 world-renowned <br /> specialists</p>
                        <img src="https://s3.amazonaws.com/images.teladoc.com/www/2019/landing-pages/bdstart/icon-specialities-sub.svg" alt="" />
                        <p className="text-center">450 specialties and <br />
                            subspecialties</p>
                    </div>
                </div>
                <div div className="col">
                    <img className="img-fluid" src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" alt="" />
                </div>
            </Row>
        </Container>
    );
};

export default ExpartTeam;