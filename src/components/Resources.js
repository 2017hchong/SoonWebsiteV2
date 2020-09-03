import React from 'react';
import './styles/Resources.css';
import Container from 'react-bootstrap/Container';
import PrayerRequestsForm from "./PrayerRequestsForm";
import NearbyChurches from "./NearbyChurches"

const Resources = () => (
    <Container>
        <div className={"maxBodyWidth"}>
            <h1 className="header">Resources</h1>
            <PrayerRequestsForm />
            <NearbyChurches /> 
        </div>
        
    </Container>
);

export default Resources;