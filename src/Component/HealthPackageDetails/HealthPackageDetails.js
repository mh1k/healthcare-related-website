import { faFileSignature, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./HealthPackageDetails.css"

const HealthPackageDetails = () => {
    const [packages, setPackage] = useState([])
    const { packageId } = useParams();
    useEffect(() => {
        fetch('/healthcheck.json')
            .then(res => res.json())
            .then(data => setPackage(data))

    }, []);

    const termsIcon = <FontAwesomeIcon icon={faFileSignature} />
    const testIcon = <FontAwesomeIcon icon={faMicroscope} />


    const singlePackage = packages?.find(packag => packag.pakage_id === packageId)
    console.log(singlePackage);
    return (
        <div>
            <div className="package-banner d-flex align-items-center justify-content-center ">
                <h1 className="text-center text-head">{singlePackage?.pakageName}</h1>
            </div>
            <Container>
                <div className="mt-5 mb-5">
                    <h5 className="mb-4 p-2 pakage-title"><span className="me-3">{testIcon}</span>{singlePackage?.packagesubName}</h5>
                    {
                        singlePackage?.packagesubDetails?.map(dt => <p key={dt}># {dt}</p>)
                    }
                </div>


                <div>
                    <h5 className="mt-3 p-2 pakage-title"><span className="me-3">{termsIcon}</span>Package Terms and Conditions</h5>
                    {
                        singlePackage?.description?.map(dt => <div key={dt} className="d-flex align-items-center p-4 pak-terms"><img className="me-3 " style={{ height: "30px" }} src="https://www.columbiaindiahospitals.com/sites/default/files/new-design-images/health-check-images/general-terms-conditions-icon.png" alt="" /><p>{dt}</p></div>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default HealthPackageDetails;