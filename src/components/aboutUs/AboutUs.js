import React, { Component } from 'react';
import AboutStory from "./aboutStory";
import AboutInspiredItems from "./aboutInspiredItems"
import "./AboutUs.css"




class AboutUs extends Component {
    render() {
        return (
            <div>
                <AboutStory {...this.props} />
                <AboutInspiredItems {...this.props} />
            </div>
        );
    }
}

export default AboutUs;