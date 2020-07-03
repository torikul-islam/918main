import React, { Component } from 'react';
import inspiredSlide from '../Asset/Images/inspired_slide_item.png'
import './threeSlide.css';


class ThreeSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container-fluid ins-area'>
                <div className='container inspired' >
                    <h2 className='ins-title'>Recommended Reading.</h2>

                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <h3>How to Choose the <br /> Best White Paint for <br /> Your Space</h3>
                                    <p>Such a great design rule! Do not <br /> buy all matching pieces!</p>
                                    <div className='slide-desc'> Studio McGee </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <h3>How to Choose the <br /> Best White Paint for <br /> Your Space</h3>
                                    <p>Such a great design rule! Do not <br /> buy all matching pieces!</p>
                                    <div className='slide-desc'> Studio McGee </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <h3>How to Choose the <br /> Best White Paint for <br /> Your Space</h3>
                                    <p>Such a great design rule! Do not <br /> buy all matching pieces!</p>
                                    <div className='slide-desc'> Studio McGee </div>
                                </div>
                                <div className="arrows">
                                    <div className="arrow-left arrow-slide">
                                        <img src={require('../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
                                    </div>
                                    <div className="arrow-right arrow-slide">
                                        <img src={require('../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
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

export default ThreeSlide;