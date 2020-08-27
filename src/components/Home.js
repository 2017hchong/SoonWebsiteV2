import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Arrow from "./Arrow";

import "./styles/Home.css";
import Instagram from "./Instagram";
import PastEventCard from "./PastEventCard";


// Example function for passing into arrow
function handleClick() {
    alert("Clicked Arrow!");
}

const Home = () => (
    <div>

        HOME!
        <div className={"temp"}>
            <Arrow
                isRight={true}
                clickFunction={()=>handleClick()}
            />
            <Arrow
                isRight={false}
                clickFunction={()=>handleClick()}
            />
            <Instagram
                instaLink={"https://www.instagram.com/p/B9jz-6FBOP-/?utm_source=ig_web_copy_link"}
            />
        </div>
        <PastEventCard
            img={"https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"}
            title={"Large Group"}
            date={"September 10, 2020"}
            time={"8:00 PM EST"}
        />

        <Link className={"linkClass"}>Sample Link!</Link> <br/>
        <Link to={"/events"} className={"linkClass"}>Go to Events Page</Link>
    </div>
);

export default Home;