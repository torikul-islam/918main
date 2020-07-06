import React, { Component } from 'react';
import Navbar from '../navbar';
import "../about_us/AboutUs.css"
import AboutStory from "../about_us/aboutStory";
import AboutInspiredItems from "../about_us/aboutInspiredItems"

class AboutUs extends Component {
    render() {
        return (
            <div>
                <AboutStory />
                <AboutInspiredItems />
            </div>
        );
    }
}

export default AboutUs;