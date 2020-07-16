import React, { useState, useEffect } from 'react';
import InspirationTitle from './inspirationTitle';
import Navbar from '../navbar2'
import InspirationDetailsProduct from './inspirationDetailsProduct';
import InspirationAlsoLike from './inspirationAlsoLike';
import './inspirationDetails.css';



function InspirationDetails() {


    return (
        <>
            <Navbar />
            <InspirationTitle />
            <InspirationDetailsProduct />
            <InspirationAlsoLike />
        </>
    );
}


export default InspirationDetails;