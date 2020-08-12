import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import inspirationServices from '../../services/inspiredService';
import paginate from '../../utils/paginate';




function AccountInspiration() {
    const [pageSize, setPageSize] = useState(4);
    const [inspired, setInspired] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await inspirationServices.getUserInspirationLike();
            setInspired(data);
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

    let paginateIns = [];
    if (inspired.length > 0) {
        paginateIns = paginate(inspired, currentPage, pageSize);
    }

    return (
        <div className="account-slider">
            <h3>Inspiration.</h3>
            <div className='tab-index'>
                {paginateIns && <div className='slider'>
                    <div className='row'>
                        {paginateIns.map((item, i) =>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                <img src={item.inspiration.ref_img} alt="" />
                                <h6>{item.inspiration.designed_by}</h6>
                            </div>
                        )}
                        <Pagination
                            itemsCount={inspired.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>}
            </div>
            <hr />
        </div>
    );
}

export default AccountInspiration;