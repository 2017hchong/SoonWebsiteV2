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
                    <InterestForm/>
                    <div id="upcomingImgContainer" className={"whiteSpace"}>
                        <img id="upcomingImg" src={require('../images/announcements/soon101.png')} alt={"Upcoming Events"} />
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