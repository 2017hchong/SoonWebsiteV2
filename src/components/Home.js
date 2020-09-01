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


// Example function for passing into arrow
function handleClick() {
    alert("Clicked Arrow!");
}

const Instaposts = [
    "https://www.instagram.com/p/B3ntXu5B5qD/",
    "https://www.instagram.com/p/CEXq-7Sh2Zu/",
    "https://www.instagram.com/p/CEXqaM2BQOH/"
];


const BasicRows = () => <Gallery targetRowHeight={200} columns={4} photos={photos} />;

const Home = () => (
    <div>
        <LandingPage></LandingPage>

            {/*<h1 className={"header tempHeader"}> Columbia Soon Movement</h1>*/}
            {/*<div className={"maxBodyWidth"}>*/}
            {/*    <div className={"body centeredText"}>*/}
            {/*        Thank you for visiting us! We are currently in the process of renovating the site and will be fully up within the next week.*/}
            {/*        /!*Interested in learning more about us? Visit our parent organization: <br/><br/><a href={"https://soonmovement.org/"}>Soon Movement</a>.*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"whiteSpace"}/>*/}
            {/*<BasicRows/>*/}
            {/*<div className={"maxBodyWidth"}>*/}
            {/*    <h2 className={"subheader whiteSpace"}>Join Our Welcome Week Giveaway!</h2>*/}
            
        <Announcements></Announcements>

        <Container>
            <div className={"maxBodyWidth"}>
                <h2 className={"subheader whiteSpace"}> Events </h2>
                <MainEventCard
                    img={"https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"}
                    title={"Large Group"}
                    description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
                    date={"September 10, 2020"}
                    time={"8:00 PM EST"}
                    location={"www.google.com"}
                    isLink={true}
                />

                <h2 className={"subheader whiteSpace"}>Connect on Facebook</h2>
                <div className={"body centeredText"}>
                    We are collecting short surveys for all students interested in learning more about us. Click the link below and fill out
                    the survey for a chance to win a FREE T-SHIRT! <br/><br/>
                    <a href={"https://tinyurl.com/soonraffle"}>Enter Giveaway</a>
                </div>

                <h2 className={"subheader whiteSpace"}>Connect with Us!</h2>
                <div className={"body centeredText"}>
                    We are very active on social media, and would love to connect with you! Feel free to join our group on Facebook
                    and follow us on Instagram!
                    <SocialMediaButtons/>
                </div>

                {/*<h2 className={"subheader whiteSpace"}>Who We Are</h2>*/}
                {/*<div className={"body centeredText"}>*/}
                {/*    Columbia SOON Movement is a Christian fellowship at Columbia University and an interdenominational ministry, previously known as KCCC. As part of SOON Movement Global (SMG),*/}
                {/*    we are committed to spreading the Gospel of Jesus Christ to every campus and every nation.*/}
                {/*    <br/><br/>*/}
                {/*    <Link to={"/aboutus"} className={"linkClass"}> About Us </Link>*/}
                {/*</div>*/}
            </div>
            <div className={"whiteSpace"}/>
            <BasicRows/>
        </Container>
    </div>
);


// const Home = () => (
//     <div>
//         <Container>
//             <div className={"maxBodyWidth"}>
//                 <h2 className={"subheader whiteSpace"}>Who We Are</h2>
//                 <div className={"body centeredText"}>
//                     Columbia SOON Movement is a Christian fellowship at Columbia University and an interdenominational ministry, previously known as KCCC. As part of SOON Movement Global (SMG),
//                     we are committed to spreading the Gospel of Jesus Christ to every campus and every nation.
//                     <br/><br/>
//                     <Link to={"/aboutus"} className={"linkClass"}> About Us </Link>
//                 </div>
//
//                 <h2 className={"subheader whiteSpace"}> Events </h2>
//                 <MainEventCard
//                     img={"https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"}
//                     title={"Large Group"}
//                     description={"Join us for our first official large group of the semester! This will be a great time to reconnect with fellow SOON members as well as welcome our newcomers!"}
//                     date={"September 10, 2020"}
//                     time={"8:00 PM EST"}
//                     location={"www.google.com"}
//                     isLink={true}
//                 />
//
//                 <h2 className={"subheader whiteSpace"}>Connect on Facebook</h2>
//                 <div className={"body centeredText"}>
//                     We mainly communicate through our Facebook page, so please make sure to join our group for updates on upcoming events and other imporant announcements!
//                     <br/><br/>
//                     <a href={"https://www.facebook.com/groups/columbiakccc/"} className={"linkClass"}> See our Facebook Page </a>
//                 </div>
//
//                 <h2 className={"subheader whiteSpace"}>Instagram</h2>
//             </div>
//             <div id={"instaRow"}>
//                 <Instagram
//                     instaLink={Instaposts[0]}
//                 />
//                 <Instagram
//                     instaLink={Instaposts[1]}
//                 />
//                 <Instagram
//                     instaLink={Instaposts[2]}
//                 />
//             </div>
//             <div className={"maxBodyWidth"}>
//                 <div className={"whiteSpace"}>
//                     <InterestForm/>
//                 </div>
//             </div>
//         </Container>
//
//         {/* ########### EXAMPLE COMPONENTS BELOW!!! #################*/}
//         <div className={"temp whiteSpace"}>
//             <Arrow
//                 isRight={true}
//                 clickFunction={()=>handleClick()}
//             />
//             <Arrow
//                 isRight={false}
//                 clickFunction={()=>handleClick()}
//             />
//             <Instagram
//                 instaLink={"https://www.instagram.com/p/B9jz-6FBOP-/?utm_source=ig_web_copy_link"}
//             />
//         </div>
//         <PastEventCard
//             img={"https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"}
//             title={"Large Group"}
//             date={"September 10, 2020"}
//             time={"8:00 PM EST"}
//         />
//
//         <Link className={"linkClass"}>Sample Link!</Link> <br/>
//         <Link to={"/events"} className={"linkClass"}>Go to Events Page</Link>
//     </div>
// );

export default Home;