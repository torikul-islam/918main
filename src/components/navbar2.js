import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AwesomeTitle from './awesomeTitle';
import './navbar2.css';




class Navbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='nav-secondary container-fluid'>

                <div className='container'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className='nav-item logo'>
                                    <img src={require('../Asset/Images/Logo.png')} alt="" />
                                </li>
                                <li className="nav-item font-hel">
                                    <div className="nav-link">Workspace</div>
                                </li>
                                <li className="nav-item font-hel">
                                    <div className="nav-link" to="/explore" >Explore</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" >
                                        <div className='signup'>
                                            Sign Up
                                    </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <AwesomeTitle />
            </div>


        );
    }
}

export default Navbar2;