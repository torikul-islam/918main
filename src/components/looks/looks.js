import React, { useEffect, useState } from 'react';
import LookHead from '../looks/lookHead';
import LookPost from './lookPost';
import productServices from '../../services/productService';
import './looks.css';
import LookSlider from './lookSlider';



function Looks() {
    const [product, setProduct] = useState([]);
    const [pageSize, setPageSize] = useState(3);
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


    return (
        <>
            <LookHead data={product.slice(0, 1)} />
            <LookPost product={product.slice(1, 9)} />
            <LookSlider data={product} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
        </>
    );
}



export default Looks;
