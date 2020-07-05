import React, { Component } from 'react';
import Navbar from '../navbar';
import "../about_us/aboutStory.css"

class AboutStory extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props} />
                <div className="list-furniture">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h4>About Us</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="text-about">
                                    <h2>Mission</h2>
                                    <p>Lorem ipsum dolor <br />sit amet, consectetur
                                    <br />adipiscing elit, sed <br />
                                    do eiusmod tempor<br /> incididunt ut labore<br />
                                    et dolore magna <br />aliqua.  </p>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="img-about">
                                    <img src={require('../../Asset/Images/about_right.jpg')} alt="about_right.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-8">
                                <div className="img-about">
                                    <img src={require('../../Asset/Images/Aboutus-right.jpg')} alt="Aboutus-right.jpg" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-about">
                                    <h2>Mission</h2>
                                    <p>Lorem ipsum dolor <br />sit amet, consectetur
                                    <br />adipiscing elit, sed <br />
                                    do eiusmod tempor<br /> incididunt ut labore<br />
                                    et dolore magna <br />aliqua.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutStory;