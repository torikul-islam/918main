import React from 'react';
import './goBtn.css';



const GoBtn = ({ text = 'Go', onClick }) => {
    return (
        <div className='go-btn' onClick={onClick}>
            <button type='button'>{text}</button>
        </div>
    );
}

export default GoBtn;