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

    function onChangeSearch(e) {

    }

    return (
        <>
            <AboutStory {...props}
                onChangeSearch={onChangeSearch}
                searchData={[]} />
            <AboutInspiredItems {...props} />
        </>
    );
}

export default AboutUs;

