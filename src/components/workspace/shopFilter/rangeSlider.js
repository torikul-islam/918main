import React, { useEffect, useState } from 'react';
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import './rangeSlider.css';
import wNumb from 'wnumb';



const RangeSlider = (props) => {
    let { updatePriceRange } = props;
    let low, high;
    function onChange(range) {
        let [lowPrice, highPice] = range;
        low = lowPrice;
        high = highPice;
    }

    return (
        <div className="rangeslider">
            <Nouislider
                range={{ min: 0, max: 20000 }}
                start={[0, 10000]}
                tooltips
                format={wNumb({
                    thousand: ',',
                    prefix: '$ ',
                    decimals: 0
                })}
                onChange={onChange}
            />
        </div>
    );
}

export default RangeSlider;