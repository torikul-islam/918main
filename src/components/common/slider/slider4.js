import React, { Component } from 'react';
import './slider.css';


const Slider4 = ({ data }) => {

    return (
        <>
            {data && data.map(item =>
                <div className="col-sm-3" key={item.uuid}>
                    <div className="image-slide">
                        <img src={item.ref_img} alt="" />
                        <h6>{item.retailer || item.designed_by}</h6>
                        {item.price && <p>${item.price}</p>}
                    </div>
                </div>
            )}
        </>
    );
}

export default Slider4;