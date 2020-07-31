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
                    </div>
                    <div className="about-img-section">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="img-about2">
                                    <img src={require('../../Asset/Images/Aboutus-right.jpg')} alt="Aboutus-right.jpg" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-about">
                                    <h2>Our Story.</h2>
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
        </div>
    );
}

export default AboutStory;