import React from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function BlogSlider({ resource, currentPage, pageSize, onPageChange }) {

    const Capitalize = (text) => {
        let lowercase = text.toLowerCase();
        if (typeof lowercase !== "string") return lowercase;
        return lowercase.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    const paginateResource = paginate(resource, currentPage, pageSize);
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
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0]}`}>
                                            <img src={item.ref_img} alt="" />
                                        </Link>
                                        <h6>{Capitalize(item.title)}</h6>
                                        <p>{item.source}</p>
                                    </div>
                                )}
                                <Pagination
                                    itemsCount={resource.length}
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