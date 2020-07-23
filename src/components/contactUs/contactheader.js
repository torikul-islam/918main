import React from 'react';
import NavbarB from '../nav/navbarB';
import './contactheader.css';

const Contactheader =(clickCard, openMenu, openModal, handleOpenMenu) => {
    return (
        <div className="contact-area">

        <NavbarB
            clickCard={clickCard}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
        />

        <div className="container">
            <div className='contact-text'>
                <h2>Contact</h2>
                <hr/>
            </div>
        </div>
        
    </div>
    );
};


export default Contactheader;