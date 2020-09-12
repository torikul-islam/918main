import React from 'react';
import './paginate.css';




const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount <= 1) return null;

    return (
        <div className="arrows">
            <div className={currentPage <= 0 ? "arrow-left arrow-slide disabled " : 'arrow-left arrow-slide '} onClick={() => onPageChange('-')} >
                <img src={require('../../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
            </div>
            <div className={currentPage >= pageCount - 1 ? "arrow-right arrow-slide disabled " : "arrow-right arrow-slide"} onClick={() => onPageChange('+')} >
                <img src={require('../../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
            </div>
        </div>
    );
}

export default Pagination;