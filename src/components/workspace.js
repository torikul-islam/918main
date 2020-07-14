import React, { Component } from 'react';
import './workspace.css';
import Navbar2 from './navbar2';



class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar2/>
                workspace page render here...
            </div>
        );
    }
}

export default Workspace;