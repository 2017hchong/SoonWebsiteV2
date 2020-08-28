import React from 'react';
import './styles/Resources.css';
import Container from 'react-bootstrap/Container';
import PrayerRequestsForm from "./PrayerRequestsForm";

const Resources = () => (
    <Container>
        <div className={"maxBodyWidth"}>
            <h1 className="header">Resources</h1>
            <PrayerRequestsForm/>
            <h2 className={"subheader"} id={"nearbyChurches"}>Nearby Churches</h2>
            <div className={"body centeredText"}>
                It is important to know that as a student organization, we are not a church.
                We encourage all our members to attend their own church service on Sundays.
                Below are a list of churches in NYC many of our members attend.
                <br/><br/>
                Feel free to reach out to any of our members and they will be happy to connect and bring you to their church!
            </div>
        </div>
    </Container>
);

export default Resources;