import React from "react";
import InterestForm from "./InterestForm";
import Container from "react-bootstrap/Container";
import App from "../App";

import './styles/GetInvolved.css';

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
                <div id={"interestFormContainer"}>
                    <InterestForm/>
                </div>
            </Container>
        )
    }
}


export default GetInvolved;