import React from 'react';
import NavbarB from '../nav/navbarB';
import './headerShop.css';



const HeaderInspired = ({ clickCard, openMenu, openModal, handleOpenMenu }) => {
    return (
        <div className="home-area">

            <NavbarB
                clickCard={clickCard}
                openMenu={openMenu}
                openModal={openModal}
                handleOpenMenu={handleOpenMenu}
            />
            {/* <div className='container-fluid' >
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
                                <NavLink className="nav-link" to="/workspace" exact >Workspace</NavLink>
                            </li>
                            <li className="menu-item font-hel">
                                <NavLink className="nav-link" to="/explore" exact >Explore</NavLink>
                            </li>
                            <li className="menu-item signup">
                                <NavLink className="nav-link" to="/SignUp" exact >Sign Up</NavLink>
                            </li>
                            <span className="menu-icon">
                                <li className="menu-item man">
                                    <NavLink className="nav-link" to="/account" exact>
                                        <img src={require('../../Asset/Images/man.png')} alt="man.png" />
                                    </NavLink>
                                </li>
                                <li className="menu-item shop" onClick={clickCard}>
                                    <img src={require('../../Asset/Images/black_shoping.png')} alt="black_shoping.png" />
                                </li>
                            </span>
                        </div>
                    </ul>
                </div>
            </div> */}
            <div className="container">
                <div className='home-text'>
                    <h2>Need ideas?</h2>
                    <p>Be inspired by some of our favorite home designs and designers!</p>
                </div>
            </div>
        </div>
    );
}


export default HeaderInspired;
