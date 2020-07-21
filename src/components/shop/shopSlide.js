import React, { Component } from 'react';
import Slider4 from '../common/slider/slider4';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from '../common/goBtn';
import { Link } from 'react-router-dom';
import './shopSlide.css';




const ShopSlide = ({ data, currentPage, pageSize, onPageChange, pieces, selectedItem, onItemSelect }) => {
    const paginateShop = data && paginate(data, currentPage, pageSize);
    return (
        <div className="shop-slider bg_shop">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Shop</h4>
                        <ul className="shopTab">
                            {pieces.map(item =>
                                <li
                                    onClick={() => onItemSelect(item)}
                                    className={item.id === selectedItem ? 'disable active' : 'pointer'}
                                    key={item.uuid} >
                                    {item.name.toUpperCase()}
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
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
            <div className="shop-more">
                <Link to='/shop-more'>
                    <GoBtn text="Shop More" />
                </Link>
            </div>

        </div>
    );
}

export default ShopSlide;