import React, { useEffect, useState } from 'react';
import NavbarB from '../nav/navbarB';
import ProductDetailsTitle from './productDetailsTitle';
import ProductDetailsSlider from './postDetailsSlider';
import ProductDetailsSliderPost from './productDetailsSliderPost';





function ProductDetails({ openModal, addShoppingCard, openMenu, handleOpenMenu, clickCard }) {
    return (
        <>
            <NavbarB openMenu={openMenu} clickCard={clickCard} handleOpenMenu={handleOpenMenu} openModal={openModal} />
            <ProductDetailsTitle addShoppingCard={addShoppingCard} />
            <ProductDetailsSlider />
            <ProductDetailsSliderPost />
        </>
    );
}

export default ProductDetails;