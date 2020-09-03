import React, { Component } from "react";
import "./styles/NearbyChurches.css";


class NearbyChurches extends React.Component {
    render() {
        return (
            <div>
                <h2 className={"subheader"} id={"nearbyChurches"}>Nearby Churches</h2>
                <div className={"body centeredText"}>
                    It is important to know that as a student organization, we are not a church.
                    We encourage all our members to attend their own church service on Sundays.
                    Below are a list of churches in NYC many of our members attend.
                <br /><br />
                    Feel free to reach out to any of our members and they will be happy to connect and bring you to their church!
                <br /><br />
                <p id="announcement">
                    DUE TO COVID-19, ALL OF THE CHURCHES BELOW HOLD WEEKLY SERVICES VIA YOUTUBE.
                </p>
                </div>


                <div id="churches">
                    <div class="church" id="exilic">
                        <img id="ExilicIcon" src={require('../images/resources/nearbyChurches/exilic.svg')} alt={"Exilic Icon"} />
                        <p>
                            <a href={"https://www.exilic.com/"} className={"subheader churchText"}> EXILIC PRESBYTERIAN CHURCH </a>
                        </p>
                        <u>
                            <p>
                                <a href={"https://www.youtube.com/channel/UCyelJHPMuHQdHbAdPudPwvg"} className={"details youtube"}> GO TO EXILIC YOUTUBE CHANNEL </a>
                            </p>
                        </u>
                    </div>
                    <div class="church" id="in2">
                        <img id="In2Icon" src={require('../images/resources/nearbyChurches/in2.svg')} alt={"In2 Icon"} />
                        <p>
                            <a href={"http://vision.onnuri.org/in2/"} className={"subheader churchText"}> ONNURI - IN2 CHURCH </a>
                        </p>
                        <u>
                            <p>
                                <a href={"https://www.youtube.com/channel/UChSdpglx9TUnE1L7w0uQ8KQ"} className={"details youtube"}> GO TO NEW YORK IN2 ONNURI YOUTUBE CHANNEL </a>
                            </p>
                        </u>
                    </div>
                    <div class="church" id="morningside">
                        <img id="MorningsideIcon" src={require('../images/resources/nearbyChurches/morningside.svg')} alt={"Morningside Icon"} />
                        <p>
                            <a href={"http://morningside-nyc.com/"} className={"subheader churchText"}> MORNINGSIDE UMC </a>
                        </p>
                        <u>
                            <p>
                                <a href={"https://www.youtube.com/channel/UC_LdhXi8dQhIg0uYm4_whmA/"} className={"details youtube"}> GO TO MORNINGSIDE YOUTUBE CHANNEL </a>
                            </p>
                        </u>
                    </div>
                </div>
            </div>
        );
    }
}

export default NearbyChurches;