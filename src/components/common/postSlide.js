import React, { Component } from 'react';
import './postSlide.css';

class PostSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <main>
                <div className="post-slide-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                                    <p>Studio McGee</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                                    <p>Studio McGee</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                                    <p>Studio McGee</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                                    <p>Studio McGee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default PostSlide;