import React, { useState, useEffect } from 'react';
import resourceService from '../../services/resourceService';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';





function ProductDetailsSliderPost(data) {

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

    const paginateRes = paginate(resource, currentPage, pageSize);
    return (
        <div className="container">
            <h3>Related content.</h3>
            <div className="slide-main">

                <div className="row">
                    {paginateRes && paginateRes.map(item =>
                        <div className="col-sm-3" key={item.uuid}>
                            <div className="image-post-slide">
                                <img src={item.ref_img || ""} alt="" />
                                <h6>{item.title || ""}</h6>
                                <p>{item.source || ""}</p>
                            </div>
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
    );
}

export default ProductDetailsSliderPost;