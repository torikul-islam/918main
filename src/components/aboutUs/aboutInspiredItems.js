import React, { Component } from 'react';
import LearnMore from '../common/learnButton';
import {Link} from 'react-router-dom';
import "./aboutInspiredItems.css";
import GoBtn from '../common/goBtn';




class AboutInspiredItems extends Component {
    render() {
        return (
            <>
                <div className="aboutinspireditems">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center pt-5 pb-5">
                                <h2>Decorating your home?</h2>
                                <span>Here’s how we can help!</span>
                            </div>
                        </div>
                        <div className="about-icons">
                            <div className="row">
                                <div className="col-sm-3">
                                    <Link  to='/inspired-more'>
                                        <div className="icons-header-lights">
                                            <img src={require('../../Asset/Images/light-bulb.png')} alt="inspired.png" />
                                            <h5>Be inspired.</h5>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                <Link to='/learn-more'>
                                    <div className="icons-header-lights">
                                        <img src={require('../../Asset/Images/learn.png')} alt="learn.png" />
                                        <h5>Learn.</h5>
                                    </div>
                                </Link>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                <Link to='/shop-more'>
                                    <div className="icons-header-lights">
                                        <img src={require('../../Asset/Images/shop.png')} alt="shop.png" />
                                        <h5>Shop.</h5>
                                    </div>
                                </Link>
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                <Link to='/workspace'>
                                    <div className="icons-header-lights">
                                        <img src={require('../../Asset/Images/design.png')} alt="design.png" />
                                        <h5>Design.</h5>
                                    </div>
                                </Link>    
                                </div>
                                <div className="col-sm-9">
                                    <div className="iconLogo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ready_for text-center pt-5 pb-5">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4>Ready to get started?</h4>
                                        <Link to='/workspace'> <GoBtn text='Create a Moodboard' /></Link>
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