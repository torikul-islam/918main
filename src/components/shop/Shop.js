import React, { useEffect, useState } from 'react';
import HeaderShop from './headerShop';
import ShopSlide from '../shop/shopSlide';
import ShopInspired from '../shop/shopInspired';
import TabShop from '../shop/tabShop';
import ShopThreeSlide from '../shop/shopThreeSlide';
import productServices from '../../services/productService';
import '../shop/Shop.css';
import ShopTab from './shoptab';
import TrendingSlider from '../common/slider/trendingSlider';
import ShopTrending from './shopTrending';
import ShopPost from './shopPost';
import Looks from '../looks/looks';



function Shop({ clickCard }) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            setProduct(data.results);
        })()
    }, []);



    function onPageChange(page) {
        if (page === '-') {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => window.addEventListener("resize", handleResize));

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    return (
        <>
            <HeaderShop clickCard={clickCard} />
            <TabShop />
            <ShopPost data={product.slice(0, 4)} />
            <ShopTrending data={product.slice(4,)} onPageChange={onPageChange} currentPage={currentPage} pageSize={pageSize} />
            <ShopPost data={product.slice(4, 8)} />
            <ShopPost data={product.slice(8, 12)} />
            <ShopPost data={product.slice(12, 16)} />
        </>
    )
}


export default Shop;