import React, { useEffect, useState } from 'react';
import Slider4 from '../common/slider/slider4';
import productService from '../../services/productService';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';





function ProductDetailsSlider(params) {
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

    const paginateProd = paginate(product, currentPage, pageSize);

    return (
        <div className='container'>
            <div className="slide-main">
                <div className='row'>
                    <Slider4 data={paginateProd} />

                    <Pagination
                        itemsCount={product.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                </div>

            </div>
        </div>

    )
}


export default ProductDetailsSlider;