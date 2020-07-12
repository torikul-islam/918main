import React from 'react';
import './slider.css';


const TrendingSlider = ({ data }) => {

    return (
        <>
            {data && data.map(item =>
                <div className="col-lg-3 col-md-3 col-sm-12" key={item.uuid}>
                    <div className="image-slide">
                        <img src={item.ref_img} alt="" />
                        <h6>{item.source}</h6>
                    </div>
                </div>
            )}
        </>
    );
}

export default TrendingSlider;