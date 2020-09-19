import React, { useState, useEffect } from 'react';
import resourceService from '../../services/resourceService';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import './productDetailsSliderPost.css'
import { Link } from 'react-router-dom';
import capitalize from '../../utils/capitalize';





function ProductDetailsSliderPost(data) {

    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource({ count: data.count, next: data.next, previous: data.previous, results: data.results });
        })()
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    async function onPageChange(val) {
        const diff = resource.results.length - (currentPage * pageSize * 2);

        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && resource.next !== null) {
                const { data } = await resourceService.getResourcesByUrl(resource.next.split('?')[1]);
                setResource({ count: data.count, next: data.next, previous: data.previous, results: [...resource.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    const paginateRes = paginate(resource.results, currentPage, pageSize);
    return (
        <div className="realted-resourced">
            <div className="realted-resource container-fluid">
                <div className="container">
                    <h3 className='related-title'> Related content.</h3>
                    <div className="slide-main">

                        <div className="row">
                            {paginateRes && paginateRes.map(item =>
                                <div className="col-sm-3" key={item.uuid}>
                                    <div className="image-post-slide">
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                            <div>
                                                <img src={item.ref_img || ""} alt="" />
                                            </div>
                                            <div>
                                                <h6>{capitalize(item.title) || ""}</h6>
                                            </div>
                                        </Link>
                                        <p>{item.source || ""}</p>
                                    </div>
                                </div>
                            )}

                            <Pagination
                                itemsCount={resource.count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={onPageChange}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetailsSliderPost;