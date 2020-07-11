import React, { Component } from 'react';
import inspiredSlide from '../Asset/Images/inspired_slide_item.png';
import TitleWithBer from '../components/shop/titleWithBer'
import Pagination from './common/pagination';
import paginate from '../utils/paginate';
import './threeSlide.css';




const ThreeSlide = ({ data, pageSize, currentPage, onPageChange }) => {
    const paginateData = paginate(data, currentPage, pageSize);
    return (
        <div className='container-fluid ins-area'>
            <div className='container inspired' >
                <TitleWithBer text='Recommended Reading.' />

                <div className='tab-index'>
                    <div className='slider'>
                        <div className='row'>
                            {paginateData.map((item, i) =>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1'>
                                    <img src={item.ref_img} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>{item.content.substr(0, 100)}</p>
                                    <div className='slide-desc'>{item.source}</div>
                                </div>
                            )}
                            <Pagination
                                itemsCount={data.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={onPageChange} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ThreeSlide;

