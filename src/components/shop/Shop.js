import React, { Component } from 'react';
import Navbar from '../navbar';
class Shop extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props}/>
                <div>This is Shop</div>
            </div>
        );
    }
}

export default Shop;