import React, { useEffect, useState } from 'react';
import Navbar2 from '../navbar2';
import ProductDetailsTitle from './productDetailsTitle';
import ProductDetailsSlider from './postDetailsSlider';
import ProductDetailsSliderPost from './productDetailsSliderPost';





function Index() {
    return (
        <>
            <Navbar2 />
            <ProductDetailsTitle />
            <ProductDetailsSlider />
            <ProductDetailsSliderPost />
        </>
    );
}

export default Index;