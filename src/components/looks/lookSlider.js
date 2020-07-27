import React from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function LookSlider({ data, count, currentPage, pageSize, onPageChange }) {

    const paginateResource = paginate(data, currentPage, pageSize);

    return (
        <div className='container'>
            <div className='row'>
                <div className="account-slider">
                    <div className="col-sm-12">
                        <h3>You may also like.</h3>
                    </div>

                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                {paginateResource && paginateResource.map((item, i) =>
                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12' key={i}>
                                        <Link to={`/product-details/${item.uuid}`} className='remove-u-line'>
                                            <img src={item.ref_img} alt="" />
                                            <p>{item.retailer}</p>
                                        </Link>
                                    </div>
                                )}
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
            </div>
        </div>
    );
}

export default LookSlider;