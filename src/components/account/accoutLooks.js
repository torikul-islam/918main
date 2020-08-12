import React, { useEffect, useState } from 'react';
import paginate from '../../utils/paginate';
import Pagination from '../common/pagination';


function AccountLooks(props) {
    const [pageSize, setPageSize] = useState(4);
    const [looks, setLooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            // call the looks backend services. then set setLooks with backend data.
            setLooks(Array(20).fill().map((_, i) => i + 1));
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
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4);
        }
    }

    const paginateLooks = paginate(looks, currentPage, pageSize);
    return (
        <div className="account-slider">
            <h3>Looks.</h3>
            <div className='tab-index'>
                <div className='slider'>
                    <div className='row'>
                        {paginateLooks && paginateLooks.map((item, i) =>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                <img src={item.ref_img} alt="" />
                                <h6>{item.retailer}</h6>
                                {/* <p>${item.price}</p> */}
                            </div>
                        )}
                        <Pagination
                            itemsCount={looks.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default AccountLooks;