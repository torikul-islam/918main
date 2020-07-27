import React, { useEffect } from 'react';
import AboutStory from "./aboutStory";
import AboutInspiredItems from "./aboutInspiredItems"
import "./AboutUs.css"

const AboutUs = (props) => {
    useEffect(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }), []);


    return (
        <>
            <AboutStory {...props} />
            <AboutInspiredItems {...props} />
        </>
    );
}

export default AboutUs;

