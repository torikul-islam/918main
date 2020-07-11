import React, { Component } from 'react';
import HeaderInspired from './headerInspired';



class InspiredDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <HeaderInspired />
            </div>
        );
    }
}

export default InspiredDetails;