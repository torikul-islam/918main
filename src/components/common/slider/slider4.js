import React, { Component } from 'react';
import GoBtn from '../goBtn';
import './slider.css';
import Paginate from '../paginate';


const Slider4 = ({ title, titleBar, data, onPageChange }) => {


    return (
        <section className="slider-section">
            {data && <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>{title}</h4>
                        <ul>
                            <li>FURNITURE</li>
                            <li>DECOR</li>
                            <li>RUGS</li>
                            <li>BED &amp; BATH</li>
                            <li>LIGHTING</li>
                        </ul>
                    </div>
                </div>
                <div className="slide-main">
                    <div className="row">
                        {data.map(item =>
                            <div className="col-sm-3" key={item.uuid}>
                                <div className="image-slide">
                                    <img src={item.ref_img} alt="" />
                                    <h6>{item.retailer || item.designed_by}</h6>
                                    {item.price && <p>${item.price}</p>}
                                </div>
                            </div>
                        )}


                        {/* <div className="col-sm-3">
                            <div className="image-slide">
                                <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h6>Retailer</h6>
                                <p>$523</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="image-slide">
                                <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h6>Retailer</h6>
                                <p>$523</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="image-slide">
                                <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h6>Retailer</h6>
                                <p>$523</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="image-slide">
                                <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h6>Retailer</h6>
                                <p>$523</p>
                            </div>
                        </div> */}


                        <div className="arrows">
                            <div className="arrow-left arrow-slide"  >
                                <img src={require('../../../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
                            </div>
                            <div className="arrow-right arrow-slide" >
                                <img src={require('../../../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            }
        </section>
    );
}

export default Slider4;