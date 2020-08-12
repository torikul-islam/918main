import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import productService from '../../services/productService';
import paginate from '../../utils/paginate';
import { Link } from 'react-router-dom';




function InspirationDetailsProduct(props) {
    const [pageSize, setPageSize] = useState(4);
    const [product, setProduct] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await productService.getAllProducts();
            setProduct({ count: data.count, next: data.next, previous: data.previous, results: data.results });
        })()
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize); window.addEventListener('load', handleResize)
    });

    async function onPageChange(val) {
        const diff = product.results.length - (currentPage * pageSize * 2);

        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && product.next !== null) {
                const { data } = await productService.getProductByUrl(product.next.split('?')[1]);
                setProduct({ count: data.count, next: data.next, previous: data.previous, results: [...product.results, ...data.results] });
            }
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

    const paginateProd = paginate(product.results, currentPage, pageSize);
    return (
        <div className="container-fluid ins-dt-area">
            <div className='container'>
                <div className='row'>
                    <div className="account-slider-ins-dtl">
                        <div className="col-sm-12">
                            <h3>Related Product.</h3>
                        </div>

                        <div className='tab-index'>
                            <div className='slider'>
                                <div className='row'>
                                    {paginateProd && paginateProd.map((item, i) =>
                                        <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                            <Link to={`/product-details/${item.uuid}`} className='remove-u-line'>
                                                <img src={item.ref_img} alt="" />
                                                <h6>{item.retailer}</h6>
                                            </Link>
                                            <p>${item.price}</p>
                                        </div>
                                    )}
                                    <Pagination
                                        itemsCount={product.count}
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
        </div>
    );
}

export default InspirationDetailsProduct;