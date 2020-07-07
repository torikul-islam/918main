import React, { Component } from 'react';
import './paginate.css';




const Paginate = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageSize === 1) return null;

    const page = itemsCount

    return (
        <div className="arrows">
            <div className="arrow-left arrow-slide" onClick={() => onPageChange('-')} >
                <img src={require('../../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
            </div>
            <div className="arrow-right arrow-slide" onClick={() => onPageChange('+')} >
                <img src={require('../../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
            </div>
        </div>
    );
}

export default Paginate;