import React, { Component } from 'react';
import inspiredSlide from '../../Asset/Images/inspired_slide_item.png';
import TitleWithBer from '../shop/titleWithBer';
import './shopThreeSlide.css';


class ShopThreeSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container-fluid ins-area'>
                <div className='container inspired' >
                <TitleWithBer />

                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                     <div className='slide-desc'> Mountain Chic </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <div className='slide-desc'> Mountain Chic </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <div className='slide-desc'> Mountain Chic </div>
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

export default ShopThreeSlide;