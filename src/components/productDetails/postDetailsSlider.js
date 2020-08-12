import React, { useEffect, useState } from 'react';
import Slider4 from '../common/slider/slider4';
import productService from '../../services/productService';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';





function ProductDetailsSlider(props) {
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
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
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

    const paginateProd = paginate(product.results.filter(x => x.uuid !== props.match.params.id), currentPage, pageSize);

    return (
        <div className="container-fluid ins-area">
            <div className='container'>
                <div className="slider-title">
                    <h3>You May Also Like.</h3>
                </div>

                <div className="slide-main">
                    <div className='row'>
                        <Slider4 data={paginateProd} />

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

    )
}


export default ProductDetailsSlider;