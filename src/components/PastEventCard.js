import './styles/PastEventCard.css';
import React from "react";

class PastEventCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    render() {
        const blackOverlay = this.state.hover ?
            <div id={"imageWrapper"}>
                <div className={"body white titlePastEvent"}>{this.props.title}</div>
                <div className={"details white"}>{this.props.date}</div>
                <div className={"details white"}>{this.props.time}</div>
            </div> : null;

        const image = this.state.hover ?
            <img id={"pastEventCardImgHovered"}
                 src={ this.props.img } /> :
            <img id={"pastEventCardImg"}
                 src={ this.props.img } />;

        return (
            <div id="pastEventCard"

                 onMouseEnter={() => this.setState({hover: true})}
                 onMouseLeave={() => this.setState({hover: false})}>
                {image}
                {blackOverlay}
            </div>
        );
    }
}

export default PastEventCard;