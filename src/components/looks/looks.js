import React, { useEffect, useState } from 'react';
import LookHead from '../looks/lookHead';
import LookPost from './lookPost';
import productServices from '../../services/productService';
import LookSlider from './lookSlider';
import './looks.css';



function Looks(props) {
    const [product, setProduct] = useState({ count: null, next: null, previous: null, results: [] });
    const [pageSize, setPageSize] = useState(3);
    const [currentPage, setCurrentPage] = useState(0)
    const [productLike, setProductLike] = useState([]);



    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
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
            setPageSize(3)
        }
    }

    async function onPageChange(val) {
        const diff = product.results.length - (currentPage * pageSize * 2);

        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && product.next !== null) {
                const { data } = await productServices.getProductByUrl(product.next.split('?')[1]);
                setProduct({ count: data.count, next: data.next, previous: data.previous, results: [...product.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await productServices.getUserProductLike();
                if (data) {
                    setProductLike(data);
                }
            }
        })()
    }, []);

    async function clickProductLike(item) {
        let form = new FormData();
        form.set('product', item.uuid);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await productServices.createProductLike(form);
            if (data) {
                setProductLike([...productLike, { uuid: null, product: item }]);
            }
        }
    }

    function onChangeSearch(e) {

    }


    return (
        <>
            <LookHead
                {...props}
                clickProductLike={clickProductLike}
                productLike={productLike}
                onChangeSearch={onChangeSearch}
                searchData={[]}
                product={product.results.length > 0 && product.results[0]}
            />
            <LookPost
                product={product.results.slice(1, 9)}
            />
            <LookSlider
                data={product.results}
                count={product.count}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>
    );
}



export default Looks;
