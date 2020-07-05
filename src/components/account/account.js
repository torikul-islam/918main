import React, { Component } from 'react';
import '../account/account.css';
import Navbar from '../navbar2';
import MainTitleAccount from '../account/mainTitleAccount';
import AccountInspired from '../account/accountInspired';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MainTitleAccount />
                <AccountInspired />
                <AccountInspired />
                <AccountInspired />
                <AccountInspired />
            </div>
        );
    }
}

export default AboutUs;