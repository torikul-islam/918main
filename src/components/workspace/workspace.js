import React, { Component } from 'react';
import './workspace.css';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import Itemcontainer from './itemcontainer/itemcontainer';



const Workspace = ({ openModal, openMenu, handleOpenMenu }) => {



    return (
        <div>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal} />
                workspace page render here...
                <Itemcontainer/>
                <Board/>
        </div>
    );
}


export default Workspace;