import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed';

import "./styles/Instagram.css";

class Instagram extends React.Component {

    render() {

        return (
            <div id={"instagram"}>
                <InstagramEmbed
                    url={this.props.instaLink}
                    // maxWidth={120}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />
            </div>
        );
    }
}

export default Instagram;