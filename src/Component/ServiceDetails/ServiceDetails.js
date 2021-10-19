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
    const singleService = services?.find(service => service.service_id === serviceId)
    return (
        <div className="mt-5">
            <Container>
                <div>
                    <h2 className="mb-3 bg-primary p-2 text-light">{singleService?.serviceName}</h2>
                    <p>{singleService?.summary}</p>
                    <br />
                    <h4 className="bg-primary p-2 text-light">{singleService?.detailstitle}</h4>
                    <ul>
                    {singleService?.details.map(dt=><li>{dt}</li>)}
                    </ul>


                </div>

            </Container>
            
        </div>
    );
};

export default ServiceDetails;