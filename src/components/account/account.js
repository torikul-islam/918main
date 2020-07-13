import React, { Component } from 'react';
import '../account/account.css';
import Navbar from '../navbar2';
import AccountSidebar from '../account/accountsidebar';


class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <AccountSidebar />
            </div>
        );
    }
}

export default AboutUs;