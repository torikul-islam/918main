import React, { Component } from 'react';
import './shopSlide.css';

class ShopSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <main>
                <div className="post-slide-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="image-post-slide">
                                    <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ShopSlide;