import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./styles/Announcements.css";

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
class Announcements extends React.Component {
    render() {
        const details = this.props.details.map((value, index) => (
                validURL(value) ?
                    <u> <a href={value} className={"details"}> {value} </a></u>
                :
                    <div> {value} <br/><br/></div>

            ));

        const annoucementsLink =
            this.props.hasLink ?
            <p id="announcementsLink">
                <Link to={this.props.linkLocation} className={"linkClass"}>{this.props.linkName}</Link>
            </p> : null;

        const image = this.props.hasImage ?
            <img id={"announcementsImage"} src={this.props.imageLocation}/> : null;

        return (
            <div className= "announcementsFrame">
                <div className={"subheader"}>ANNOUNCEMENTS</div>
                <div id={"announcementsTopContainer"}>
                    <div id={"annoucementsLeft"}>
                        <div className={"body title"}>
                            {this.props.title}
                        </div>
                        <div className={"details announcement"}>
                            {details}
                        </div>
                    </div>

                    <div id={"announcementsRight"}>
                        {image}
                    </div>
                </div>

                <br /><br />
                {annoucementsLink}
            </div>
        );
    }
}

export default Announcements;