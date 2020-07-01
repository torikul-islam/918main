import React, { Component } from 'react';
import './headerHome.css';
class HeaderHome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <main>
                <div className="home-area">
                    <div className="container">
                        <h2>Your Home Decorating Hub</h2>
                        <p>Here, you’ll find all of the resources you <br />
                        need to make decorating not only easier, <br /> but also fun!</p>
                    </div>
                </div>
                <div className="icon-books">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="inspired icons-header-lights">
                                    <img src={require('../Asset/Images/light-bulb.png')} alt="light-bulb.png" />
                                    <h5>Be inspired.</h5>
                                </div>
                            </div>
                            <div className="col-sm-3 padding-zero">
                                <div className="learn icons-header-lights">
                                    <img src={require('../Asset/Images/learn.png')} alt="learn.png" />
                                    <h5>Learn.</h5>
                                </div>
                            </div>
                            <div className="col-sm-3 padding-right-zero">
                                <div className="shop icons-header-lights">
                                    <img src={require('../Asset/Images/shop.png')} alt="shop.png" />
                                    <h5>Shop.</h5>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="inspired icons-header-lights">
                                    <img src={require('../Asset/Images/design.png')} alt="design.png" />
                                    <h5>Design.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="own-design">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className='readytocreate'>
                                    <h5>Ready to create <br /> your own design?!</h5>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='moodboard'>
                                    <button>Create a Moodboard</button>
                                </div>
                            </div>
                        </div>
                        <div className="width-color-fill">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="image-bg">
                                        <img src={require('../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="text-furniture">
                                        <p>Studio McGee</p>
                                        <h4>Why You <br />Shouldn’t Buy the <br />Furniture Set.</h4>
                                        <p>Such a great design rule!<br /> Do Not buy all matching<br /> pieces!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default HeaderHome;
