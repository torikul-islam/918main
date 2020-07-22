import React from 'react';
import './detailmodal.css';
import ProductDetailsTitle from '../../productDetails/productDetailsTitle';
import ShopTrending from '../../shop/shopTrending';
import Looks from '../../looks/lookSlider';


const DeataileModal = (data) => {
    return (
        <div>
            <ProductDetailsTitle />
            {/* <ShopComponentTrending /> */}
            <Looks />
        </div>
    )
}

export default DeataileModal;