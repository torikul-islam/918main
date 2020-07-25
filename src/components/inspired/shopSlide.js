import React, { Component } from 'react';
import './shopSlide.css';



const ShopSlide = ({ data ,count}) => {
    return (
        <div className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map((item, i) =>
                        <div className="col-sm-3" key={i}>
                            <div className={count==3?"image-post-slide-three":"image-post-slide"}>
                                <img src={item.ref_img} alt="" />
                                <h6>{item.source}</h6>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShopSlide;
