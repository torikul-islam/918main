import React from 'react';
import NavbarB from '../nav/navbarB';
import './headerShop.css';
import Socailicon from '../common/socialicons/socailicon';
import Subscribe from '../common/socialicons/subscribe';



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
            <Socailicon />
                <Subscribe />
        </div>
    );
}


export default HeaderInspired;
