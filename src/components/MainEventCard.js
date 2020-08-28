import './styles/MainEventCard.css';
import React from "react";
import {Link} from 'react-router-dom';

class MainEventCard extends React.Component {

    render() {
        const location = this.props.isLink ?
            <a href={this.props.location} className={"linkClass"}>Join Event</a>
            : <div>{this.props.location}</div>;
        return (
            <div id="mainEventCard">
                <div id={"mainImageDiv"}>
                    <img id={"mainImage"}
                         src={ this.props.img } />
                </div>
                <div id={"mainText"}>
                    <div id={"dateTimeDivMainEvent"} className={"details"}>
                        <span>{this.props.date}</span>
                        <span className="dot"/>
                        <span>{this.props.time}</span>
                    </div>
                    <div id={"titleMainEvent"} className={"body"}>
                        {this.props.title}
                    </div>
                    <div id={"descriptionMainEvent"} className={"details"}>
                        {this.props.description}
                    </div>
                    <div id={"locationMainEvent"} className={"details"}>
                        {location}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainEventCard;