import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Arrow from "./Arrow";

import "./styles/Home.css";

import Container from 'react-bootstrap/Container';
import Instagram from "./Instagram";
// import MainEventCard from "./MainEventCard";
// import PastEventCard from "./PastEventCard";
// import PrayerRequestsForm from "./PrayerRequestsForm";
// import InterestForm from "./InterestForm";
// import SocialMediaButtons from "./SocialMediaButtons";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import LandingPage from "./LandingPage";
import Announcements from "./Announcements";
// import EventCarousel from "./EventCarousel";
import EventsData from "./EventsData";

const Instaposts = [
    "https://www.instagram.com/p/CEXq-7Sh2Zu/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CF5ejVLHOr8/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CGk66Xknucu/?utm_source=ig_web_copy_link"
];

const BasicRows = () => <Gallery targetRowHeight={200} columns={4} photos={photos} />;

const Home = () => (
    <div>
        <LandingPage/>

        <Announcements
            title={"🌱 SIGN UP FOR SOONMOIM (SMALL GROUP)! 🌱"}
            details={[
                "Attention all new members 📢!",
                "Sign ups for Soonmoims, or Soon small groups, are now open 🥰!",
                "As the core of our ministry, Soonmoims offer students the chance to explore and grow in their fath through precious fellowship with one another 💖.",
                "Sign up using the link below👇🏼.",
                "http://www.tinyurl.com/cusoongroup"
]}
            hasLink={false}
            linkLocation={"/events"}
            linkName={"go to events"}
            hasImage={true}
            imageLocation={require("../images/announcements/SmiSignup.png")}
        />

        <Container>
            <div className={"maxBodyWidth"}>

                <h2 className={"subheader whiteSpace"}>Who We Are</h2>
                <div className={"body centeredText"}>
                    Columbia SOON Movement is a Christian fellowship at Columbia University and an interdenominational ministry, previously known as KCCC. As part of SOON Movement Global (SMG),
                    we are committed to spreading the Gospel of Jesus Christ to every campus and every nation.
                    <br/><br/>
                    <Link to={"/aboutus"} className={"linkClass"}> About Us </Link>
                </div>

                <h2 className={"subheader whiteSpace"}> Events </h2>
            </div>
        </Container>
            <EventsData/>
        <Container>
            <div className={"maxBodyWidth"}>

                <h2 className={"subheader whiteSpace"}>Connect on Facebook</h2>
                <div className={"body centeredText"}>
                    We mainly communicate through our Facebook page, so please make sure to join our group for updates on upcoming events and other imporant announcements!
                    <br/><br/>
                    <a href={"https://www.facebook.com/groups/columbiakccc/"} className={"linkClass"}> See our Facebook Page </a>
                </div>

                <h2 className={"subheader whiteSpace"}>Instagram</h2>
            </div>

            <div id={"instaRow"}>
                <Instagram
                    instaLink={Instaposts[0]}
                />
                <Instagram
                    instaLink={Instaposts[1]}
                />
                <Instagram
                    instaLink={Instaposts[2]}
                 />
             </div>
            <div className={"whiteSpace"}/>
            <h2 className={"subheader whiteSpace"}>Connect with Us!</h2>
            <div className={"body centeredText"}>
                We love meeting new people! Come fill out an interest form and join us for any of our events!
                <br/><br/>
                <Link to={"/getInvolved"} className={"linkClass"}>Get Involved</Link>
            </div>
            <div className={"whiteSpace"}/>
            <BasicRows/>
        </Container>


    </div>
);

export default Home;