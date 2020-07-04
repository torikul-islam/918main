import React, { Component } from 'react';
import HeaderShop from './headerShop';
import ShopSlide from '../inspired/shopSlide';
import ShopInspired from '../inspired/shopInspired';
import TabShop from '../inspired/tabShop';
import ShopThreeSlide from '../inspired/shopThreeSlide'
import '../inspired/inspired.css';

class Inspired extends Component {
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

export default Inspired;