import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Arrow from "./Arrow";

import "./styles/Home.css";


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
        </div>

        <Link className={"linkClass"}>Sample Link!</Link> <br/>
        <Link to={"/events"} className={"linkClass"}>Go to Events Page</Link>
    </div>
);

export default Home;