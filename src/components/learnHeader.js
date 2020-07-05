import React, { Component } from 'react';
import './learnHeader.css';

class LearnHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="header-learn">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="learn-text">
                                    <h3>Learn</h3>
                                    <h5>Studio McGee</h5>
                                    <h2>The beautiful homes<br/>and how to create <br/>them.</h2>
                                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do se ultrices gravida</p>
                                    <div className="read-more">
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="learnbanner">
                                    <img src={require('../Asset/Images/LearnBanner.png')} alt="LearnBanner.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LearnHeader;
