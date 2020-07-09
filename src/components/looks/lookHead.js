import React, { Component } from 'react';
import './lookHead.css';
import Navbar from '../navbar2';




class LookHead extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="lookhead">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="headingLook">
                                    <h4>Awesome Title Here.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-with-logo">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <span className="favIcon">
                                        <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LookHead;
