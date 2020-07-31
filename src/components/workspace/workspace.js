import React, { useState, useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import ItemContainer from './itemContainer/itemContainer';
import InspirationFilter from './inspirationFilter/inspirationFilter';
import ShopFilter from './shopFilter/shopFilter';
import Modal from '../common/modal/modal';
import ShopModal from './shopModal';
import './workspace.css';



const Workspace = (props) => {
    const [modal, setModal] = useState({ isOpen: false, name: null });
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            // call the backend server and set response array in setProduct const
            setProduct([]);
        })()
    }, []);

    useEffect(() => {
        (async function () {
            // call the backend server and set response array in setProducts const
            setProducts([]);
        })()
    }, []);


    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };

    function clickFilterImage(name, item) {
        setModal({ isOpen: true, name: name })
    }

    function onChangeSearch() {

    }

    const { name, isOpen } = modal;
    return (
        < >
            <NavbarB  {...props}
                onChangeSearch={onChangeSearch}
                searchData={[]} search={"null"} />
            <div className="container-fluid page-content">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <ItemContainer clickFilterImage={clickFilterImage} openModal={openModal} />
                    </div>

                    <div className="col-md-8 col-sm-6">
                        <Board />
                    </div>

                </div>
            </div>
            {name === 'shop' && <Modal isOpen={isOpen} childComp={<ShopFilter openModal={openModal} closeModal={closeModal} />} />}
            {name === 'shopImage' && <Modal isOpen={isOpen} childComp={<ShopModal product={product} products={products} openModal={openModal} closeModal={closeModal} />} />}
            {name === 'inspiredImage' && <Modal isOpen={isOpen} childComp={<ShopModal product={product} products={products} openModal={openModal} closeModal={closeModal} />} />}
            {name === 'inspired' && <Modal isOpen={isOpen} childComp={<InspirationFilter closeModal={closeModal} />} />}
        </>
    );
}


export default Workspace;