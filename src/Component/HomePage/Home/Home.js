import React from 'react';
import ExpartTeam from '../../ExpartTeam/ExpartTeam';
import HealthPackage from '../../HealthPackage/HealthPackage';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HealthPackage></HealthPackage>
            <ExpartTeam></ExpartTeam>
        </div>
    );
};

export default Home;