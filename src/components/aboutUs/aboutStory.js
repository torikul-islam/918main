import React from 'react';
import NavbarB from '../nav/navbarB';
import "./aboutStory.css"


const AboutStory = (props) => {
    return (
        <div>
            <NavbarB {...props} />
            <div className="list-furniture about-us">
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
                    <div className="about-text-section">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="text-about">
                                    <h2>Mission</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.  </p>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="img-about">
                                    <img src={require('../../Asset/Images/about_right.jpg')} alt="about_right.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-img-section">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="img-about2">
                                    <img src={require('../../Asset/Images/Aboutus-right.jpg')} alt="Aboutus-right.jpg" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-about">
                                    <h2>Our Story.</h2>
                                    <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutStory;