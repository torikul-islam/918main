import React, { Component } from 'react';
import './looks.css';
import LookHead from '../looks/lookHead';

class Looks extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <LookHead />
            </>
        );
    }
}

export default Looks;
