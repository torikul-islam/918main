import React, { useEffect, useState } from 'react';
import NavbarB from '../nav/navbarB';
import ProductDetailsTitle from './productDetailsTitle';
import ProductDetailsSlider from './postDetailsSlider';
import ProductDetailsSliderPost from './productDetailsSliderPost';





function Index(openModal, data, openMenu, handleOpenMenu ) {
    return (
        <>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal}/>
            <ProductDetailsTitle />
            <ProductDetailsSlider />
            <ProductDetailsSliderPost />
        </>
    );
}

export default Index;