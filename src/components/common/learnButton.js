import React, { Component } from 'react';
import './learnButton.css';

class LearnButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="learn-more">
                <button>Learn More</button>
            </div>
        );
    }
}

export default LearnButton;