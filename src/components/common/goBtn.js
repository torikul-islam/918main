import React from 'react';
import './goBtn.css';



const GoBtn = ({ text, onClick, type = 'button' }) => {
    return (
        <div className='go-btn' onClick={onClick}>
            <button type={type}>{text}</button>
        </div>
    );
}

export default GoBtn;