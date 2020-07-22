import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import productServices from '../../services/productService';
import paginate from '../../utils/paginate';




function AccountProduct() {
    const [pageSize, setPageSize] = useState(4);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            setProduct(data.results);
        })()
    }, []);

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }
    useEffect(() => window.addEventListener("resize", handleResize));

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4);
        }
    }

    const paginateProd = paginate(product, currentPage, pageSize);
    return (
        <div className="account-slider">
            <h3>Product.</h3>
            <div className='tab-index'>
                <div className='slider'>
                    <div className='row'>
                        {paginateProd && paginateProd.map((item, i) =>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                <img src={item.ref_img} alt="" />
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
            <hr />
        </div>
    );
}

export default AccountProduct;