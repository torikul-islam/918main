import React, { useState } from 'react';
import RangeSlider from './rangeSlider';
import './shopFilter.css';



function ShopFilter(props) {
    const { openModal, closeModal } = props;



    const removeIcon = <img className="removeIcon" src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
    return (

        <div className='container'>
            <div className='shop-furniture'>
                <div className='cross-icon' onClick={closeModal}>
                    <img src={require('../../../Asset/Icons/cross.png')} alt="" />
                </div>
                <div className="list-furniture">
                    <div className="container">
                        <div className="row">
                            <div className="removeIcons float-left">
                                <ul>
                                    <li>{removeIcon}Bedroom</li>
                                    <li>{removeIcon}Office</li>
                                    <li>{removeIcon}Kitchen</li>
                                    <li>{removeIcon}Black</li>
                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="productfurniture">
                                    <h5>Products</h5>
                                    <ul>
                                        <li>FURNITURE</li>
                                        <li>DECOR</li>
                                        <li>RUGS</li>
                                        <li>BED &amp; BATH</li>
                                        <li>LIGHTING</li>
                                    </ul>
                                </div>
                                <hr />
                            </div>
                            <div className="category-list">
                                <ul className="list-categroy-shop">
                                    <li><button>Living Room</button></li>
                                    <li><button>Dining Room</button></li>
                                    <li><button>Bedroom</button></li>
                                    <li><button>Office</button></li>
                                    <li><button>Kitchen</button></li>
                                    <li><button>Bathroom</button></li>
                                    <li><button>Entryway</button></li>
                                    <li><button>Outdoor</button></li>
                                    <li><button>Kids’ Room</button></li>
                                </ul>
                                <hr />
                            </div>

                            <div>
                                <div className="range-slider">
                                    <h5>Price</h5>
                                    <RangeSlider />
                                </div>
                                <hr />
                                <div className="colorStyle">
                                    <h5>Color</h5>
                                    <ul>
                                        <li className="red"></li>
                                        <li className="green"></li>
                                        <li className="yellow"></li>
                                        <li className="green"></li>
                                        <li className="blue"></li>
                                        <li className="purple"></li>
                                        <li className="pink"></li>
                                        <li className="black"></li>
                                        <li className="brown"></li>
                                        <li className="grey"></li>
                                        <li className="offwhite"></li>
                                        <li className="white"></li>
                                        <li className="golden"></li>
                                        <li className="silver"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopFilter;