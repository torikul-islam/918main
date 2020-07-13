import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                                <Link className="navbar-brand" to="/"> <img src={require('../Asset/Images/Logo.png')} alt="" /></Link>
                                </li>
                                <li className="nav-item font-hel">
                                    <NavLink className="nav-link" to="/workspace" exact>Workspace</NavLink>
                                </li>
                                <li className="nav-item font-hel">
                                    <NavLink className="nav-link" to="/explore" exact>Explore</NavLink>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" >
                                        <div className='signup'>
                                            <NavLink className="nav-link" to="/explored" exact>Sign Up</NavLink>

                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar2;