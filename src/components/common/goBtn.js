import React from 'react';
import './goBtn.css';



const GoBtn = ({ text = 'Go' }) => {
    return (
        <div className='go-btn'>
            <button type='button'>{text}</button>
        </div>
    );
}

export default GoBtn;