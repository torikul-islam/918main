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
