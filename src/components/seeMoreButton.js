import React, { Component } from 'react';
import './seeMoreButton.css';

class SeeMoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="see-more">
                <button>See More</button>
            </div>
        );
    }
}

export default SeeMoreButton;