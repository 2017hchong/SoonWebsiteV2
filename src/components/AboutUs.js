import React from 'react';
import './styles/AboutUs.css';
import Container from 'react-bootstrap/Container';
import SocialMediaButtons from "./SocialMediaButtons";

const AboutUs = () => (
    <Container>
        <div className={"maxBodyWidth"}>
            <h1 className="header">About Us</h1>

            <h2 className={"subheader"}>Follow Us</h2>
            <div className={"body centeredText"}>
                We’re very active on social media! Follow us on Instagram and don’t be afraid to join us on Facebook. We don’t bite!
                <SocialMediaButtons/>
            </div>
        </div>
    </Container>
);

export default AboutUs;