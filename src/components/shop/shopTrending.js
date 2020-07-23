import React from 'react';
import Slider4 from '../common/slider/slider4';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import TitleWithBer from './titleWithBer';


const ShopTrending = ({ data, onPageChange, currentPage, pageSize }) => {
    const paginateShop = data && paginate(data, currentPage, pageSize);

    return (
        <div className="inspired-slider">
        <div className='container'>
            <TitleWithBer text='Trending' />

            <div className='slider-main'>
                {data && <div className='row'>
                    <Slider4 data={paginateShop} />
                    <Pagination
                        itemsCount={data.length}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={onPageChange}
                    />
                </div>}
            </div>
        </div>
         </div>
    );
}

export default ShopTrending;