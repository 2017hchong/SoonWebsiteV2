import React from 'react';
import './styles/AboutUs.css';
import Container from 'react-bootstrap/Container';
import SocialMediaButtons from "./SocialMediaButtons";

const AboutUs = () => (
    <Container>
        <div className={"maxBodyWidth"}>
            <h1 className="header">About Us</h1>
        </div>
        <img id="vision" src={require('../images/about/vision.png')} alt={"Our Mission and Vision"} />
        <img id="mobileVision" src={require('../images/about/mobileVision.svg')} alt={"Our Mission and Vision"} />
        <div className={"maxBodyWidth"}>
            <h1 className={"subheader whiteSpace"}>Main Events</h1>
        </div>

        <EventGrid></EventGrid>

        <div className={"maxBodyWidth"}>
            <div className={"whiteSpace"}/>

            <h2 className={"subheader"}>Follow Us</h2>
            <div className={"body centeredText"}>
                We’re very active on social media! Follow us on Instagram and don’t be afraid to join us on Facebook. We don’t bite!
                <SocialMediaButtons/>
            </div>

            <h2 className={"subheader whiteSpace"}> Meet our Leaders</h2>
        </div>
    </Container>
);


// event cards (grid)
const EventGrid = () => (
    <div id="eventgrid">
        <div id="lgevent">
            <EventCard data={EventCardsData[0]} />
            <MobileEventCard data={EventCardsData[0]} />
        </div>

        <div id="mpevent">
            <EventCard data={EventCardsData[1]} />
            <MobileEventCard data={EventCardsData[1]} />
        </div>

        <div id="gethevent">
            <EventCard data={EventCardsData[2]} />
            <MobileEventCard data={EventCardsData[2]} />
        </div>

        <div id="retreatsevent">
            <EventCard data={EventCardsData[5]} />
            <MobileEventCard data={EventCardsData[3]} />
        </div>

        <div id="smievent">
            <EventCard data={EventCardsData[3]} />
            <MobileEventCard data={EventCardsData[4]} />
        </div>

        <div id="fellowevent">
            <EventCard data={EventCardsData[4]} />
            <MobileEventCard data={EventCardsData[5]} />
        </div>
    </div>
);

// event cards data
const EventCardsData = [
    {
        eventName: "Large Group",
        cardUrl: require("../images/about/largeGroup.svg"),
        hoverUrl: require("../images/about/lgHover.svg"),
    }, {
        eventName: "Morning Prayer",
        cardUrl: require("../images/about/morningPrayer.svg"),
        hoverUrl: require("../images/about/mpHover.svg"),
    }, {
        eventName: "Gethsemane",
        cardUrl: require("../images/about/gethsemane.svg"),
        hoverUrl: require("../images/about/gethHover.svg"),
    }, {
        eventName: "Small Group",
        cardUrl: require("../images/about/smallGroup.svg"),
        hoverUrl: require("../images/about/sgHover.svg"),
    }, {
        eventName: "Fellowship",
        cardUrl: require("../images/about/fellowship.svg"),
        hoverUrl: require("../images/about/fellowHover.svg"),
    }, {
        eventName: "Retreats",
        cardUrl: require("../images/about/retreats.svg"),
        hoverUrl: require("../images/about/retreatsHover.svg"),
    }
]

// event card with hover function
class EventCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    render() {
        return (
            <div className="eventCard"
                 onMouseEnter={() => this.setState({hover: true})}
                 onMouseLeave={() => this.setState({hover: false})}>
                <img src={this.state.hover ? this.props.data.hoverUrl : this.props.data.cardUrl}
                     alt={`${this.props.data.eventName} Event Card`} />
            </div>
        );
    }
}

class MobileEventCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    render() {
        return (
            <div class="mobileEventCard"
                 onClick={() => this.setState({hover: this.state.hover ? false : true})}>
                <img src={this.state.hover ? this.props.data.hoverUrl : this.props.data.cardUrl}
                     alt={`${this.props.data.eventName} Event Card`} />
            </div>
        );
    }
}

export default AboutUs;