import React, { useEffect, useState } from 'react';
import HeaderShop from './headerShop';
import TabShop from '../shop/tabShop';
import productServices from '../../services/productService';
import piecesService from '../../services/piecesService';
import ShopTrending from './shopTrending';
import ShopPost from './shopPost';
import '../shop/Shop.css';
import piecesGroup from '../../utils/piecesGroup';



function Shop(props) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [product, setProduct] = useState([]);

    const [pieces, setPieces] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        (async function () {
            const { data } = await piecesService.getAllPieces();
            const pieces = piecesGroup(data.results);
            setPieces(pieces);
            setSelectedItem(pieces[0].id);
            getProductById(pieces[0].id)
        })()
    }, []);


    async function getProductById(id) {
        const { data } = await productServices.getProductByPieceId(id);
        setProduct(data.results);
    }

    function onItemSelect(item) {
        setSelectedItem(item.id);
        getProductById(item.id);
        setCurrentPage(0);
    }


    // useEffect(() => {
    //     (async function () {
    //         const { data } = await productServices.getAllProducts();
    //         setProduct(data.results);
    //     })()
    // }, []);



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
            <HeaderShop {...props} />
            <TabShop
                onItemSelect={onItemSelect}
                selectedItem={selectedItem}
                pieces={pieces}
                title="Shop" />
            <ShopPost data={product.slice(0, 4)} />
            <ShopTrending data={product.slice(4,)}
                onPageChange={onPageChange} currentPage={currentPage} pageSize={pageSize} />
            <ShopPost data={product.slice(4, 8)} />
            <ShopPost data={product.slice(8, 12)} />
            <ShopPost data={product.slice(12, 16)} />
        </>
    )
}


export default Shop;