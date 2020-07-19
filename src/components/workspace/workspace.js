import React, { Component } from 'react';
import './workspace.css';
import NavbarB from '../nav/navbarB';



const Workspace = ({ openModal, openMenu, handleOpenMenu }) => {
    return (
        <div>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal} />
                workspace page render here...
        </div>
    );
}


export default Workspace;