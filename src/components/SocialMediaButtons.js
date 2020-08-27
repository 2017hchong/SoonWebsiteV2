import React from 'react';
import './styles/SocialMediaButtons.css';

const SocialMediaButtons = () => (
    <div id={"socialMediaLinks"}>
        <a id={"facebookCont"} href="https://www.facebook.com/groups/columbiakccc/">
            <img className="socialImages" src={require("../images/interestForm/facebook.svg")}></img>
            <div>Join us on Facebook</div>
        </a>
        <a id={"instagramCont"} href="https://www.instagram.com/cu_soonmovement/">
            <img className="socialImages" src={require("../images/interestForm/instagram.svg")}></img>
            <div>Follow us on Instagram</div>
        </a>
    </div>
);

export default SocialMediaButtons;