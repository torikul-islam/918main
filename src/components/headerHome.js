import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './headerHome.css';





class HeaderHome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="home-area">
                    <div className='container-fluid' >
                        <div className='container-menu' id='menu'>
                            <ul className="home-menu">
                                <div className="search-float">
                                    <li className="sarch">
                                        <img src={require('../Asset/Images/search.png')} alt="search.png" />
                                    </li>
                                </div>
                                <div className="logo-width">
                                    <li className='logo'>
                                        <NavLink className="nav-link" to="/" exact >
                                            <img src={require('../Asset/Images/logo-white.png')} alt="logo-white.png" />
                                        </NavLink>
                                    </li>
                                </div>
                                <div className="menu-float">
                                    <li className="menu-item font-hel">
                                        <NavLink className="nav-link" to="/workspace" exact >workspace</NavLink>
                                    </li>
                                    <li className="menu-item font-hel">
                                        <NavLink className="nav-link" to="/explore" exact >explore</NavLink>
                                    </li>
                                    <li className="menu-item signup">
                                        <NavLink className="nav-link" to="/SignUp" exact >Sign Up</NavLink>
                                    </li>
                                    <span className="menu-icon">
                                        <li className="menu-item man">
                                            <img src={require('../Asset/Images/man.png')} alt="man.png" />
                                        </li>
                                        <li className="menu-item shop">
                                            <img src={require('../Asset/Images/black_shoping.png')} alt="black_shoping.png" />
                                        </li>
                                    </span>
                                </div>
                            </ul>
                        </div>
                    </div>




                    <div className="container">
                        <div className='home-text'>
                            <h2>Your Home Decorating Hub</h2>
                            <p>Here, you’ll find all of the resources <br />
                            you need to make decorating not only <br /> easier, but also fun! </p>
                        </div>
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
            </>
        );
    }
}

export default HeaderHome;
