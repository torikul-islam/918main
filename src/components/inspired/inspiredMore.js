import React, { useEffect, useState } from 'react';
import HeaderInspired from './headerInspired';
import ShopSlide from './shopSlide';
import ShopInspired from './shopInspired';
import TabShop from './tabShop';
import resourceService from '../../services/resourceService';
import productService from '../../services/productService';
import ShopThreeSlide from '../shop/shopThreeSlide';
import '../inspired/inspired.css';



function InspiredMore(props) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [resource, setResource] = useState([]);
    const [product, setProduct] = useState([]);
    const title = 'Be Inspire';


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource(data.results);
        })()
    }, []);


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
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <>
            <HeaderInspired {...props} />
            <TabShop title={title}/>
            <ShopSlide data={resource.slice(0, 4)} />
            <ShopInspired data={resource.slice(4,)} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            <ShopSlide data={resource.slice(8, 12)} />
            <ShopThreeSlide />
            <ShopSlide data={resource.slice(12, 16)} />
            <ShopSlide data={resource.slice(16, 19)} />
            <ShopSlide data={resource.slice(19, 23)} />
        </>
    );
}

export default InspiredMore;