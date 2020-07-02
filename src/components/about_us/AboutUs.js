import React, { Component } from 'react';
import Navbar from '../navbar';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props}/>
                <div> This is About Us </div>
            </div>
        );
    }
}

export default AboutUs;