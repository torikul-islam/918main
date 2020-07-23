import React, { useState, useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import ItemContainer from './itemContainer/itemContainer';
import InspirationFilter from './inspirationFilter/inspirationFilter';
import ShopFilter from './shopFilter/shopFilter';
import Modal from '../common/modal/modal';
import './workspace.css';



const Workspace = (props) => {
    const [modal, setModal] = useState({ isOpen: false, name: null });


    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };

    const { name, isOpen } = modal;
    return (
        < >
            <NavbarB  {...props} search={"null"} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <ItemContainer openModal={openModal} />
                    </div>

                    <div className="col-md-8">
                        <Board />
                    </div>

                </div>
            </div>
            {name === 'shop' && <Modal isOpen={isOpen} childComp={<ShopFilter openModal={openModal} closeModal={closeModal} />} />}
            {name === 'inspired' && <Modal isOpen={isOpen} childComp={<InspirationFilter closeModal={closeModal} />} />}
        </>
    );
}


export default Workspace;