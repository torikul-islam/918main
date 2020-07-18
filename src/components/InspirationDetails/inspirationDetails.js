import React, { useState, useEffect } from 'react';
import InspirationTitle from './inspirationTitle';
import NavbarB from '../nav/navbarB'
import InspirationDetailsProduct from './inspirationDetailsProduct';
import InspirationAlsoLike from './inspirationAlsoLike';
import inspiredService from '../../services/inspiredService';
import './inspirationDetails.css';



function InspirationDetails({ openModal, data, openMenu, handleOpenMenu }) {
    const [inspired, setInspired] = useState([])


    useEffect(() => {
        (async function () {
            // const { data } = await inspiredService.getAllProducts();
            // setProduct(data.results);
        })()
    }, []);

    return (
        <>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal} />
            <InspirationTitle />
            <InspirationDetailsProduct />
            <InspirationAlsoLike />
        </>
    );
}


export default InspirationDetails;