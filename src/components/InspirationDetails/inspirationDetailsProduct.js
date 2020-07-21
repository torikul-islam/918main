import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import productService from '../../services/productService';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function InspirationDetailsProduct(props) {
    const [pageSize, setPageSize] = useState(4);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await productService.getAllProducts();
            setProduct(data.results);
        })()
    }, []);

    useEffect(() => window.addEventListener("resize", handleResize));

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    const paginateProd = paginate(product, currentPage, pageSize);

    return (
        <div className='container'>
            <div className='row'>
                <div className="account-slider">
                    <div className="col-sm-12">
                        <h3>Related Product.</h3>
                    </div>

                    <div className='tab-index'>
                        <div className='slider'>
                            <div className='row'>
                                {paginateProd && paginateProd.map((item, i) =>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                        <Link to={`/inspired-details/${item.uuid}`}>
                                            <img src={item.ref_img} alt="" />
                                        </Link>
                                        <h6>{item.retailer}</h6>
                                        <p>${item.price}</p>
                                    </div>
                                )}
                                <Pagination
                                    itemsCount={product.length}
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

export default InspirationDetailsProduct;