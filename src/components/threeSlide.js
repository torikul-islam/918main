import React from 'react';
import { Link } from 'react-router-dom';
import TitleWithBer from '../components/shop/titleWithBer'
import Pagination from './common/pagination';
import paginate from '../utils/paginate';
import capitalize from "../utils/capitalize";
import './threeSlide.css';




const ThreeSlide = ({ data, count, pageSize, currentPage, onPageChange }) => {
    const paginateData = paginate(data, currentPage, pageSize);
    return (
        <div className='container-fluid ins-area'>
            <div className='container inspireds' >
                <TitleWithBer text='Recommended Reading.' />

                <div className='tab-index'>
                    <div className='slider'>
                        <div className='row'>
                            {paginateData && paginateData.map((item, i) =>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                    <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                        <img src={item.ref_img} alt="" />
                                        <h3>{capitalize(item.title)}</h3>
                                    </Link>
                                    <p>{item.content.substr(0, 100)}</p>
                                    <div className='slide-desc'>{item.source}</div>
                                </div>
                            )}
                            <Pagination
                                itemsCount={count}
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

