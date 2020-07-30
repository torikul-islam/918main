import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import resourceService from '../../services/resourceService';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function InspirationAlsoLike() {
    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource({ count: data.count, next: data.next, previous: data.previous, results: data.results });
        })()
    }, []);

    useEffect(() => window.addEventListener("resize", handleResize));

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

    const paginateProd = paginate(resource.results, currentPage, pageSize);

    return (
        <div className='container'>
            <div className='row'>
                <div className="account-slider-ins-dtl">
                    <div className="col-sm-12">
                        <h3>You may also like.</h3>
                    </div>

                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                {paginateProd && paginateProd.map((item, i) =>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0]}`} className='remove-u-line'>
                                            <img src={item.ref_img} alt="" />
                                            <p>{item.source}</p>
                                        </Link>
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
        </div>
    );
}

export default InspirationAlsoLike;