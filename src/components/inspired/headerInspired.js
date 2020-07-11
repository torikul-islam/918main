import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './headerShop.css';





class HeaderInspired extends Component {
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
                                        <img src={require('../../Asset/Images/search.png')} alt="search.png" />
                                    </li>
                                </div>
                                <div className="logo-width">
                                    <li className='logo'>
                                        <NavLink className="nav-link" to="/" exact >
                                            <img src={require('../../Asset/Images/logo-white.png')} alt="logo-white.png" />
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
                                            <img src={require('../../Asset/Images/man.png')} alt="man.png" />
                                        </li>
                                        <li className="menu-item shop">
                                            <img src={require('../../Asset/Images/black_shoping.png')} alt="black_shoping.png" />
                                        </li>
                                    </span>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className='home-text'>
                            <h2>Shop designer curated products!</h2>
                            <p>We know that decision paralysis is real,<br /> so we’ve made it easier by selecting the <br />
                             best of the best!  </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HeaderInspired;