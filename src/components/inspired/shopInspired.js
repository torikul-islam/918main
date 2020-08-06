import React from 'react';
import TitleWithBer from '../shop/titleWithBer'
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import TrendingSlider from '../common/slider/trendingSlider';
import './shopInspired.css';


const ShopInspired = ({ data, count, pageSize, currentPage, onPageChange }) => {
    const paginateDate = paginate(data, currentPage, pageSize);
    return (
        <div className='container-fluid ins-area'>
            <div className='container inspireds' >
                <TitleWithBer text='Trending' />
                <div className='tab-index slider'>
                    <div className="row">
                        <TrendingSlider
                            data={paginateDate}
                        />

                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ShopInspired;
