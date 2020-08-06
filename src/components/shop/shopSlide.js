import React from 'react';
import Slider4 from '../common/slider/slider4';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from '../common/goBtn';
import { Link } from 'react-router-dom';
import './shopSlide.css';




const ShopSlide = ({ data, count, currentPage, pageSize, onPageChange, pieces, selectedItem, onItemSelect }) => {
    const paginateShop = data && paginate(data, currentPage, pageSize);

    return (
        <div className="shop-slider bg_shop">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Shop</h4>
                        <ul className="shopTab">
                            {pieces.map((item, i) =>
                                <li key={i}
                                    onClick={() => onItemSelect(item)}
                                    className={item.name === selectedItem ? 'disable active' : 'pointer'} >
                                    {item.name.toUpperCase()}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='slider-main'>
                    {data && <div className='row' >
                        <Slider4 data={paginateShop} />
                        <Pagination
                            itemsCount={count}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={onPageChange}
                        />
                    </div>}
                </div>

            </div>
            <div className="shop-more">
                <Link to='/shop-more'>
                    <GoBtn text="Shop More" />
                </Link>
            </div>

        </div>
    );
}

export default ShopSlide;