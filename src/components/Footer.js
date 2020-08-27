import './styles/Footer.css';
import React from "react";

class Footer extends React.Component {
    render = () => (
        <div id={"footerDiv"}>
            <div id={"iconHolder"}>
                <Icon data={IconData[0]}></Icon>
                <Icon data={IconData[1]}></Icon>
                <Icon data={IconData[2]}></Icon>
            </div>
            <div id={"copyText"}>
                Copyright ©2020. All rights reserved by Columbia SOON Movement.
            </div>
        </div>
    );
}

// icon with hover function
class Icon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    render() {
        return (
            <div className="icon"
                 onMouseEnter={() => this.setState({hover: true})} 
                 onMouseLeave={() => this.setState({hover: false})}>
                <a href={this.props.data.url} target="_blank">
                    <img src={this.state.hover ? this.props.data.hoverUrl : this.props.data.iconUrl} 
                         alt={`${this.props.data.name} Link`} /></a>
                
            </div>
        );
    }
}

// icon data
const IconData = [
    {
        name: "SOON Facebook",
        url: "https://www.facebook.com/groups/columbiakccc/",
        iconUrl: require("../images/footer/fbIcon.svg"),
        hoverUrl: require("../images/footer/fbHover.svg"),
    }, {
        name: "SOON Homepage",
        url: "https://soonmovement.org/",
        iconUrl: require("../images/footer/soonIcon.svg"),
        hoverUrl: require("../images/footer/soonHover.svg"),
    }, {
        name: "SOON Instagram",
        url: "https://www.instagram.com/cu_soonmovement/",
        iconUrl: require("../images/footer/instaIcon.svg"),
        hoverUrl: require("../images/footer/instaHover.svg"),
    }
]

export default Footer;