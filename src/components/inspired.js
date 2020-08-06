import React, { Component } from 'react';
import inspiredSlide from '../Asset/Images/inspired_slide_item.png'
import './inspired.css';


class Inspired extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container-fluid ins-area'>
                <div className='container inspireds' >
                    <h2 className='ins-title'>Be Inspired</h2>

                    <div className='tab-index'>
                        <ul className='tabs list-unstyled'>
                            <li className='l-room'>LIVING ROOM</li>
                            <li className='b-room'>BEDROOM</li>
                            <li className='d-room'>DINING ROOM</li>
                            <li className='o-room'>OFFICE ROOM</li>
                        </ul>
                        <hr />

                        <div className='slider'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <div className='slide-desc'> Studio McGee </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1' >
                                    <img src={inspiredSlide} alt="" />
                                    <div className='slide-desc'> Studio McGee </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1'>
                                    <img src={inspiredSlide} alt="" />
                                    <div className='slide-desc'> Studio McGee </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-2 col-1'>
                                    <img src={inspiredSlide} alt="" />
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

export default Inspired;