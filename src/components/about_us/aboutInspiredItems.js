import React, { Component } from 'react';
import "./aboutInspiredItems";
import LearnMore from '../common/learnButton';

class AboutInspiredItems extends Component {
    render() {
        return (
            <>
                <div className="aboutinspireditems">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h2>Decorating your home?</h2>
                                <p>Here’s how we can help!</p>
                            </div>
                        </div>
                        <div className="about-icons">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="iconLogo">
                                        <img src={require('../../Asset/Images/light-bulb.png')} alt="inspired.png" />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="iconLogo">
                                        <img src={require('../../Asset/Images/learn.png')} alt="learn.png" />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="iconLogo">
                                        <img src={require('../../Asset/Images/shop.png')} alt="shop.png" />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="iconLogo">
                                        <img src={require('../../Asset/Images/design.png')} alt="design.png" />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ready for text-center">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4>Ready to get started?</h4>
                                        <LearnMore />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutInspiredItems;