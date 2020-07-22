import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../nav/navbar.css'




function NavbarW({ openModal, clickCard, openMenu, handleOpenMenu }) {
    return (
        <div className='container-menu' id='menu'>
            <div className="logo-width display-for-mobile">
                <li className='logo'>
                    <Link className="nav-link" to="/" >
                        <img src={require('../../Asset/Images/logo-white.png')} alt="logo-white.png" />
                    </Link>
                </li>
            </div>
            <nav className="navbar-expand-lg navbar-light">
                <button onClick={handleOpenMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={openMenu ? { display: 'block' } : { display: 'none' }} className={`collapse navbar-collapse bg-lights ${openMenu ? 'show' : ''}`} id="navbarNav">
                    <ul className="home-menu">
                        <div className="search-float">
                            <li className="search">
                                <img src={require('../../Asset/Images/search.png')} alt="search.png" />
                            </li>
                        </div>
                        <div className="logo-width">
                            <li className='logo'>
                                <Link className="nav-link" to="/" >
                                    <img src={require('../../Asset/Images/logo-white.png')} alt="logo-white.png" />
                                </Link>
                            </li>
                        </div>
                        <div className="menu-float">
                            <li className="menu-item font-hel">
                                <NavLink className="nav-link" to="/workspace" exact >Workspace</NavLink>
                            </li>
                            <li className="menu-item font-hel">
                                <NavLink className="nav-link" to="/explore" exact >Explore</NavLink>
                            </li>
                            <li className="menu-item signup" onClick={() => openModal('signup')}>
                                <div className="nav-link" >Sign Up</div>
                            </li>
                            <span className="menu-icon">
                                <li className="menu-item man">
                                    <NavLink className="nav-link" to="/account" exact>
                                        <img src={require('../../Asset/Images/man.png')} alt="man.png" />
                                    </NavLink>
                                </li>
                                <li className="menu-item shop pointer" onClick={clickCard}>
                                    <img src={require('../../Asset/Images/black_shoping.png')} alt="black_shoping.png" />
                                </li>
                            </span>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default NavbarW;