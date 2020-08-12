import React, { useState, useEffect } from 'react';
import inspiredSlide from '../../Asset/Images/inspired_slide_item.png';
import TitleWithBer from '../shop/titleWithBer';
import './shopThreeSlide.css';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';


function ShopThreeSlide(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [looks, setLooks] = useState([]);

    useEffect(() => {
        setLooks(Array(20).fill().map((_, i) => i + 1));
    }, [])



    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize);
        window.addEventListener("scroll", handleResize);
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(3);
        }
    }

    async function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const paginateLooks = paginate(looks, currentPage, pageSize);
    return (
        <div className={props.pagename === "workspace" || props.pagename === "product_details" ? 'container-fluid ins-area-modal' : 'container-fluid ins-area'}>
            <div className={props.pagename === "workspace" ? 'container inspired-modal' : 'container inspired'} >
                <TitleWithBer text='Looks' />
                <div className='tab-index '>
                    <div className='slider'>
                        <div className='row'>
                            {paginateLooks && paginateLooks.map((item, i) =>
                                <div className='col-md-4 col-sm-12 looks' key={i}>
                                    <img src={inspiredSlide} alt="" />
                                    <div className='slide-desc'> <h6>Mountain Chic {item}</h6> </div>
                                </div>
                            )}
                            <Pagination
                                itemsCount={looks.length}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                onPageChange={onPageChange}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}



export default ShopThreeSlide;