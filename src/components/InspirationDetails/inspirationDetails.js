import React, { Component } from 'react';
import './inspirationDetails.css';
import Inspirationtitle from './inspirationtitle';
import AccountInspired from '../account/accountInspired';


class InspirationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Inspirationtitle />
                <AccountInspired />
                <AccountInspired />
            </>
        );
    }
}

export default InspirationDetails;