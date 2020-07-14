import React, { Component } from 'react';
import Navbar2 from '../navbar2';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Navbar2 {...this.props}/>
                <div>This is Contact Us</div>
            </div>
        );
    }
}

export default ContactUs;