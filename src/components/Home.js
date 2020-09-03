import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Arrow from "./Arrow";

import "./styles/Home.css";

import Container from 'react-bootstrap/Container';
import Instagram from "./Instagram";
import MainEventCard from "./MainEventCard";
import PastEventCard from "./PastEventCard";
import PrayerRequestsForm from "./PrayerRequestsForm";
import InterestForm from "./InterestForm";
import SocialMediaButtons from "./SocialMediaButtons";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import LandingPage from "./LandingPage";
import Announcements from "./Announcements";
import EventCarousel from "./EventCarousel";
import EventsData from "./EventsData";

const Instaposts = [
    "https://www.instagram.com/p/CEkGm8_BtDw/",
    "https://www.instagram.com/p/B3ntXu5B5qD/",
    "https://www.instagram.com/p/CEXq-7Sh2Zu/"
];

const BasicRows = () => <Gallery targetRowHeight={200} columns={4} photos={photos} />;

const EventCards = [
    <MainEventCard
        img={"https://picsum.photos/700/400?img=1"}
        title={"Large Group"}
        description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
        location={"www.google.com"}
        isLink={true}
    />, <MainEventCard
        img={"https://picsum.photos/700/400?img=2"}
        title={"Large Group"}
        description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
        location={"www.google.com"}
        isLink={true}
    />, <MainEventCard
        img={"https://picsum.photos/700/400?img=3"}
        title={"Large Group"}
        description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
        location={"www.google.com"}
        isLink={true}
    />, <MainEventCard
        img={"https://picsum.photos/700/400?img=4"}
        title={"Large Group"}
        description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
        location={"www.google.com"}
        isLink={true}
    />, <MainEventCard
        img={"https://picsum.photos/700/400?img=5"}
        title={"Large Group"}
        description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
        location={"www.google.com"}
        isLink={true}
    />, <MainEventCard
        img={"https://picsum.photos/700/400?img=6"}
        title={"Large Group"}
        description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
        location={"www.google.com"}
        isLink={true}
    />
];

const PreviewCards = [
    <PastEventCard
        img={"https://picsum.photos/700/400?img=1"}
        title={"Large Group"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
    />, <PastEventCard
        img={"https://picsum.photos/700/400?img=2"}
        title={"Large Group"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
    />, <PastEventCard
        img={"https://picsum.photos/700/400?img=3"}
        title={"Large Group"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
    />, <PastEventCard
        img={"https://picsum.photos/700/400?img=4"}
        title={"Large Group"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
    />, <PastEventCard
        img={"https://picsum.photos/700/400?img=5"}
        title={"Large Group"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
    />, <PastEventCard
        img={"https://picsum.photos/700/400?img=6"}
        title={"Large Group"}
        date={"September 10, 2020"}
        time={"8:00 PM EST"}
    />
];

const Home = () => (
    <div>
        <LandingPage/>

        <Announcements
            title={"WELCOME BACK!"}
            details={[
                "Come learn more about our community and meet both returning and new members at our ⭐️ SOON SOCIAL ⭐️  on September 5th!",
                "If you're a newcomer, enter our ⬇️ RAFFLE GIVEAWAY ⬇️",
                "http://www.tinyurl.com/soonraffle"
            ]}
            hasLink={false}
            linkLocation={"/events"}
            linkName={"go to events"}
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