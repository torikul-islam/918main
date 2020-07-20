import React, { Component } from 'react';
import './workspace.css';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import Itemcontainer from './itemcontainer/itemcontainer';



const Workspace = ({ openModal, openMenu, handleOpenMenu }) => {



    return (
        <div>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal} />
            <div className="row">
                <div className="col-sm-4">
                    <Itemcontainer />
                </div>

                <div className="col-md-8">
                    <Board />
                </div>

            </div>

        </div>
    );
}


export default Workspace;