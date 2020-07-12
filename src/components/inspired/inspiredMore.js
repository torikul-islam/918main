import React, { useEffect, useState } from 'react';
import HeaderShop from './headerInspired';
import ShopSlide from './shopSlide';
import ShopInspired from './shopInspired';
import TabShop from './tabShop';
import resourceService from '../../services/resourceService';
import productService from '../../services/productService';
import ShopThreeSlide from '../shop/shopThreeSlide';
import '../inspired/inspired.css';



function InspiredMore() {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const [resource, setResource] = useState([]);
    const [product, setProduct] = useState([]);



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

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <>
            <HeaderShop />
            <TabShop />
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