import React, { Component } from 'react';
import './inspirationDetails.css';
import Inspirationtitle from './inspirationtitle';
import AccountInspired from '../account/accountInspired';
import Navbar from '../navbar2'


class InspirationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Navbar />
                <Inspirationtitle />
                <AccountInspired />
                <AccountInspired />
            </>
        );
    }
}

export default InspirationDetails;