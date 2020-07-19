import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarW from '../nav/navbarW';
import './headerShop.css';





const HeaderShop = ({ openModal, openMenu, handleOpenMenu, clickCard }) => {

    return (
        <>
            <div className="home-area">
                <div className='container-fluid' >
                    <NavbarW openMenu={openMenu} clickCard={clickCard} handleOpenMenu={handleOpenMenu} openModal={openModal} />
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

export default HeaderShop;
