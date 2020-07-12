import React, { Component } from 'react';
import HeaderShop from './headerShop';
import ShopSlide from '../shop/shopSlide';
import ShopInspired from '../shop/shopInspired';
import TabShop from '../shop/tabShop';
import ShopThreeSlide from '../shop/shopThreeSlide';
import ShopTab from '../shop/shoptab';
import '../shop/Shop.css';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <> 
                    <HeaderShop />
                    <TabShop />
                    <ShopTab/>
                    <ShopSlide />
                    <ShopInspired />
                    <ShopSlide />
                    <ShopThreeSlide />
                    <ShopSlide />
                    <ShopSlide />
                </>
            </div>
        );
    }
}

export default Shop;