import React from 'react';
import Color_Fill_10 from '../Asset/Images/Color_Fill_10.png';
import './awesomeTitle.css';


const AwesomeTitle = () => {
    return (
        <div className='container'>
            <div className='awesome-title'>
                <h2>Awesome Title Here.</h2>
                <div className='image'>
                    <img src={Color_Fill_10} alt="" />
                </div>
            </div>
        </div>
    );
}

export default AwesomeTitle;