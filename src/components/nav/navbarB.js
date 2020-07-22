import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function NavbarB({ openModal, openMenu, handleOpenMenu, clickCard, search }) {
    return (
        <div className='container-fluid'>
            <div className='container-menu' id='menu'>
                <div className="logo-width display-for-mobile">
                    <li className='logo'>
                        <Link className="nav-link" to="/" >
                            <img src={require('../../Asset/Images/Logo.png')} alt="Logo.png" />
                        </Link>
                    </li>
                </div>

                <nav className="navbar-expand-lg navbar-light">
                    <button onClick={handleOpenMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={openMenu ? { display: 'block' } : { display: 'none' }} className={`collapse navbar-collapse bg-lights ${openMenu ? 'show' : ''}`} id="navbarNav">
                        <ul className="home-menu">
                            <div style={search == "null" ? { visibility: "hidden" } : { visibility: "visible" }}>
                                <div className="search-float">
                                    <li className="search">
                                        <img src={require('../../Asset/Images/search.png')} alt="search.png" />
                                    </li>
                                </div>
                            </div>
                            <div className="logo-width">
                                <li className='logo'>
                                    <Link className="nav-link" to="/" >
                                        <img src={require('../../Asset/Images/Logo.png')} alt="Logo.png" />
                                    </Link>
                                </li>
                            </div>
                            <div className="menu-float">
                                <li className="menu-item font-hel">
                                    <Link className="nav-link" to="/workspace"   >Workspace</Link>
                                </li>
                                <li className="menu-item font-hel">
                                    <Link className="nav-link" to="/explore"   >Explore</Link>
                                </li>
                                <li className="menu-item signup" onClick={() => openModal('signup')}>
                                    <div className="nav-link" >Sign Up</div>
                                </li>
                                <span className="menu-icon">
                                    <li className="menu-item man">
                                        <Link className="nav-link" to="/account"  >
                                            <img src={require('../../Asset/Images/man.png')} alt="man.png" />
                                        </Link>
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
        </div>
    )
}

export default NavbarB;