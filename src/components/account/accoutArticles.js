import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import resourceService from '../../services/resourceService';
import paginate from '../../utils/paginate';




function AccountArticles() {
    const [pageSize, setPageSize] = useState(4);
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getUserResourceLike();
            setArticles(data);
        })()
    }, []);

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize); window.addEventListener('load', handleResize)
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4);
        }
    }
    let paginateArt = [];
    if (articles.length > 0) {
        paginateArt = paginate(articles, currentPage, pageSize);
    }

    return (
        <div className="account-slider">
            <h3>Articles.</h3>
            {paginateArt.length > 0 && <div className='tab-index'>
                <div className='slider'>
                    <div className='row'>
                        {paginateArt.map((item, i) =>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                <img src={item.resource.ref_img} alt="" />
                                <h6>{item.resource.title}</h6>
                                <p>{item.resource.source}</p>
                            </div>
                        )}
                        <Pagination
                            itemsCount={articles.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>
            </div>}
            <hr />
        </div>
    );
}

export default AccountArticles;