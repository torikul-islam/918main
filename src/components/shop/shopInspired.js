import React, { Component } from 'react';
import inspiredSlide from '../../Asset/Images/inspired_slide_item.png'
import TitleWithBer from '../shop/titleWithBer'
import './shopInspired.css';


class ShopInspired extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container-fluid ins-area margin-zero'>
                <div className='container inspireds' >
                    <TitleWithBer />
                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1' >
                                    <img src={inspiredSlide} alt="" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <h6>Retailer</h6>
                                    <p>$523</p>
                                </div>
                                <div className="arrows">
                                    <div className="arrow-left arrow-slide">
                                        <img src={require('../../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
                                    </div>
                                    <div className="arrow-right arrow-slide">
                                        <img src={require('../../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ShopInspired;