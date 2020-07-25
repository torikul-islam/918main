import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import resourceService from '../../services/resourceService';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function InspirationAlsoLike() {
    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource(data.results);
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


    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const paginateProd = paginate(resource, currentPage, pageSize);

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
                                {paginateProd && paginateProd.map((item, i) =>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                        <Link to={`/learn-details/${item.uuid}/${item.rooms[0]}`}>
                                            <img src={item.ref_img} alt="" />
                                        </Link>
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

export default InspirationAlsoLike;