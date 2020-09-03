import React from "react";
import InterestForm from "./InterestForm";
import Container from "react-bootstrap/Container";
import App from "../App";

import './styles/GetInvolved.css';
import SocialMediaButtons from "./SocialMediaButtons";

class GetInvolved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        };
    }

    render() {
        return (
            <Container>
                <div className={"maxBodyWidth"}>
                    <div className={"header"}>Get Involved</div>
                    <div className={"body centered"}>
                        Thank you for your interest in SOON Movement at Columbia University! We're so excited you're here!<br/><br/><br/>
                        To learn more about us and have someone reach out to you,
                        fill out this interest survey and get automatically entered in our giveaway to win a FREE T-SHIRT:
                        <br/><br/>
                        <a href={"https://tinyurl.com/soonraffle"} className={"linkClass"}>Fill out Form</a>
                    </div>
                    {/*<InterestForm/>*/}
                    <div id="upcomingImgContainer" className={"whiteSpace"}>
                        <img id="upcomingImg" src={require('../images/UpcomingEvents.png')} alt={"Upcoming Events"} />
                    </div>
                    <div>
                        <div className={"subheader whiteSpace"}>
                            Connect with Us!
                        </div>
                        <div className={"body centered"}>
                            Join us on Facebook and follow us on Instagram to learn more and stay connected.
                        </div>
                        <SocialMediaButtons/>
                    </div>
                </div>
            </Container>
        )
    }
}


export default GetInvolved;