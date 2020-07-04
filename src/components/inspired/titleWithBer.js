
import React, { Component } from 'react';
import './titleWithBer.css';

class TitleWithBer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="titleBer">
                    <div className='ins-title'><span className="trending">Trending.</span> <span className="berSlide"></span></div>
                </div>

            </>
        );
    }
}

export default TitleWithBer;