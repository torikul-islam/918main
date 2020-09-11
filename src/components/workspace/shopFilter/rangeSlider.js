import React, { useEffect, useState } from 'react';
import './rangeSlider.css';
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import wNumb from 'wnumb';



const RangeSlider = () => {

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
            />
            {/* <input onChange={(e) => onChange(e, 'one')} className="min" name="range_1" type="range" min={min} max={max} value={val1} />
            <input onChange={(e) => onChange(e, 'two')} className="max" name="range_1" type="range" min={min} max={max} value={val2} />
            <span className="range_min light left">{val1}</span>
            <span className="range_max light right">{val2}</span> */}
        </div>
    );
}

export default RangeSlider;