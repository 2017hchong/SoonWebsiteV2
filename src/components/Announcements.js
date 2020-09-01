import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./styles/Announcements.css";

class Announcements extends React.Component {
    render() {
        return (
            <div className= "announcementsFrame">
                <div className={"body title"}>
                    WELCOME BACK!
                </div>
                <div className={"details announcement"}>
                    Come learn more about our community and meet both returning and new members at our ⭐️ SOON SOCIAL ⭐️  on September 5th!
                    <br /><br />
                    If you're a newcomer, enter our ⬇️ RAFFLE GIVEAWAY ⬇️
                    <br /><br />
                    <u>
                        <a href={"http://www.tinyurl.com/soonraffle"} className="details"> http://www.tinyurl.com/soonraffle  </a>
                    </u>
                </div>
                <br /><br />
                <p id="announcementsLink">
                    <Link to={"/events"} className={"linkClass"}> go to events </Link>
                </p>
            </div>
        );
    }
}

export default Announcements;