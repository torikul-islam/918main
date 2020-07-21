import React, { Component } from 'react';
import './workspace.css';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import Itemcontainer from './itemcontainer/itemcontainer';



const Workspace = ({ openModal, openMenu, handleOpenMenu }) => {



    return (
        <div>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        <Itemcontainer />
                    </div>

                    <div className="col-md-7">
                        <Board />
                    </div>

                </div>
            </div>

        </div>
    );
}


export default Workspace;