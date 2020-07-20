import React, { useEffect, useState } from 'react';
import LookHead from '../looks/lookHead';
import LookPost from './lookPost';
import productServices from '../../services/productService';
import LookSlider from './lookSlider';
import './looks.css';



function Looks({ openMenu, openModal, handleOpenMenu, clickCard }) {
    const [product, setProduct] = useState([]);
    const [pageSize, setPageSize] = useState(3);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            setProduct(data.results);
        })()
    }, []);


    useEffect(() => window.addEventListener("resize", handleResize));

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(3)
        }
    }
    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <>
            <LookHead
                openMenu={openMenu}
                openModal={openModal}
                handleOpenMenu={handleOpenMenu}
                data={product.slice(0, 1)}
                clickCard={clickCard}
            />
            <LookPost
                product={product.slice(1, 9)}
            />
            <LookSlider
                data={product}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>
    );
}



export default Looks;
