import { faNotesMedical, faProcedures } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./ServiceDetails.css"

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    const treatmentIcon = <FontAwesomeIcon icon={faProcedures} /> /* treatment icon */
    const notesIcon = <FontAwesomeIcon icon={faNotesMedical} /> /* medical notes icon */

    const singleService = services?.find(service => service.service_id === serviceId)
    return (
        <div className="">
            <div className="service-banner mb-5 d-flex align-items-center justify-content-center ">
                <h1 className="text-center service-head">{singleService?.serviceName}</h1>
            </div>
            <Container>
                <div>
                    <h2 className="mb-3 background-color p-2 text-light"><span className="me-3">{notesIcon}</span>{singleService?.serviceName}</h2>
                    <p>{singleService?.summary}</p>
                    <br />
                    <h4 className=" background-color p-2 text-light"><span className="me-3">{treatmentIcon}</span>{singleService?.detailstitle}</h4>
                    <ul>
                    {singleService?.details.map(dt=><li key={dt}>{dt}</li>)}
                    </ul>


                </div>

            </Container>
            
        </div>
    );
};

export default ServiceDetails;