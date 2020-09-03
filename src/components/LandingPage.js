import React,{ Component } from "react";
import "./styles/LandingPage.css";

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div class="LandingPageText">
                    <div class="inner">
                        <h1 className={"header mainTitle"}> Columbia SOON Movement </h1>
                    </div>
                    <div class="inner2">
                        <h2 className={"subheader subTitle"}> MOVEMENTS EVERYWHERE </h2>
                        <h3 className={"body caption"}> so that everyone knows someone who truly follows Jesus </h3>
                    </div>
                </div>

                <div class="LPImagesRow">
                    <div class="LPImagesColumn">
                        <img id="LPImage1" src={require('../images/landingPage/fellowship.jpg')} alt={"Landing Page Image 1"} />
                    </div>
                    <div class="LPImagesColumn">
                        <img id="LPImage2" src={require('../images/landingPage/retreat.jpg')} alt={"Landing Page Image 2"} />
                    </div>
                    <div class="LPImagesColumn">
                        <img id="LPImage3" src={require('../images/landingPage/largegroup.jpg')} alt={"Landing Page Image 3"} />
                    </div>
                 </div >
            </div>
        );
    }
}

export default LandingPage;