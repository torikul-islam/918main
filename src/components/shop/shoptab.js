import React, { Component } from 'react';
import '../shop/shoptab.css';

class ShopTab extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="shop-slider bg_shop2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Shop</h4>
                            <ul>
                                <li>FURNITURE</li>
                                <li>DECOR</li>
                                <li>RUGS</li>
                                <li>BED &amp; BATH</li>
                                <li>LIGHTING</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ShopTab;