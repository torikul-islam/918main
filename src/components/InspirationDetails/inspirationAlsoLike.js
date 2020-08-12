import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import inspiredService from '../../services/inspiredService';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function InspirationAlsoLike(props) {
    const [pageSize, setPageSize] = useState(4);
    const [inspiration, setInspiration] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await inspiredService.getInspirationByRoomId(props.match.params.roomId);
            setInspiration({ count: data.count, next: data.next, previous: data.previous, results: data.results });
        })()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [props.match.params.id]);

    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize); window.addEventListener('load', handleResize)
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
        const diff = inspiration.results.length - (currentPage * pageSize * 2);

        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && inspiration.next !== null) {
                const { data } = await inspiredService.getInspirationByUrl(inspiration.next.split('?')[1]);
                setInspiration({ count: data.count, next: data.next, previous: data.previous, results: [...inspiration.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    const paginateProd = paginate(inspiration.results.filter(x => x.uuid !== props.match.params.id), currentPage, pageSize);

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
                                        <Link to={`/inspired-details/${item.uuid}/${item.rooms[0]}`} className='remove-u-line'>
                                            <img src={item.ref_img} alt="" />
                                            <p>{item.designed_by}</p>
                                        </Link>
                                    </div>
                                )}
                                <Pagination
                                    itemsCount={inspiration.count - 1}
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