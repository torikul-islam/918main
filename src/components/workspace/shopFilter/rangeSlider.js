import React, { useState } from 'react';
import './rangeSlider.css';




const RangeSlider = () => {
    let min = 0, max = 500;
    let [val1, setVal1] = useState(50);
    let [val2, setVal2] = useState(200);


    function onChange(e, slider) {
        if (slider === 'one') {
            setVal1(e.target.value);
        } else {
            setVal2(e.target.value);
        }

        if (slider === 'one') {
            val1 = parseInt(e.target.value);
            val2 = parseInt(val2);

            if (val1 >= val2 && val2 < val2 - 3) {
                setVal1(val1);
                setVal2(val2 + 3);
            } else if (val1 >= val2 - 3) {
                setVal1(val1);
                setVal2(val2 + 3);

            } else if (val1 <= val2) {
                setVal1(val1);
                setVal2(val2);

            } else {
                setVal1(val1);
                setVal2(val2);

            }
        } else if (slider === 'two') {
            val1 = parseInt(val1);
            val2 = parseInt(e.target.value);
            if (val2 <= val1 && val1 < 3) {
                setVal1(0);
                setVal2(val2 + 3);

            } else if (val2 <= 3) {
                setVal1(0);
                setVal2(3);

            } else if (val2 <= val1) {
                setVal1(val2 - 3);
                setVal2(val2);

            } else {
                setVal1(val1);
                setVal2(val2);

            }
        }
    }
    console.log(val1, val2);
    return (
        <div className="rangeslider">
            <input onChange={(e) => onChange(e, 'one')} className="min" name="range_1" type="range" min={min} max={max} value={val1} />
            <input onChange={(e) => onChange(e, 'two')} className="max" name="range_1" type="range" min={min} max={max} value={val2} />
            <span className="range_min light left">{val1}</span>
            <span className="range_max light right">{val2}</span>
        </div>
    );
}

export default RangeSlider;