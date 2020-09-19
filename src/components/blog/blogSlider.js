import React from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import capitalize from '../../utils/capitalize';
import { Link } from 'react-router-dom';
import './blog.css';




function BlogSlider(props) {
    const { resource, count, currentPage, pageSize, onPageChange } = props;
    const paginateResource = paginate(resource.filter(x => x.uuid !== props.match.params.id), currentPage, pageSize);
    return (
        <div className='container'>
            <div className='row mzero'>
                <div className="account-slider">
                    <div className="col-sm-12">
                        <h3>You May Also Like.</h3>
                    </div>

                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                {paginateResource && paginateResource.map((item, i) =>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                            <div>
                                                <img src={item.ref_img} alt="" />
                                            </div>
                                            <div>
                                                <h6>{capitalize(item.title)}</h6>
                                            </div>
                                        </Link>
                                        <p>{item.source}</p>
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

export default BlogSlider;