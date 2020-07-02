import React, { Component } from 'react';
import Navbar from '../navbar';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props}/>
                <div>This is Contact Us</div>
            </div>
        );
    }
}

export default ContactUs;