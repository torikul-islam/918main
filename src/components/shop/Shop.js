import React, { useEffect, useState } from 'react';
import HeaderShop from './headerShop';
import TabShop from '../shop/tabShop';
import productServices from '../../services/productService';
import piecesService from '../../services/piecesService';
import ShopTrending from './shopTrending';
import ShopPost from './shopPost';
import '../shop/Shop.css';
import piecesGroup from '../../utils/piecesGroup';
import GoBtn from '../common/goBtn';



function Shop(props) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [product, setProduct] = useState({ count: null, next: null, previous: null, results: [] });
    const [seeMore, setSeeMore] = useState({ next: null, previous: null, results: [] });
    const [pieces, setPieces] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        (async function () {
            const { data } = await piecesService.getAllPieces();
            const pieces = piecesGroup(data.results);
            setPieces(pieces);
            setSelectedItem(pieces[0].id);
            getProductById(pieces[0].id);
        })()
    }, []);


    async function getProductById(id) {
        const { data } = await productServices.getProductByPieceId(id);
        setProduct({ count: data.count, next: data.next, previous: data.previous, results: data.results });
        setSeeMore({ next: data.next, previous: null, results: [] });
    }

    function onItemSelect(item) {
        setSelectedItem(item.id);
        getProductById(item.id);
        setCurrentPage(0);
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

    useEffect(() => window.addEventListener("resize", handleResize));

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    async function clickSeeMore() {
        if (seeMore.next !== null) {
            const { data } = await productServices.getProductByUrl(seeMore.next.split('?')[1]);
            setSeeMore({ next: data.next, previous: data.previous, results: [...seeMore.results, ...data.results] });
        }
    }

    function onChangeSearch(e) {
        if (e.target.value) {
            const filter = product.results.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.retailer.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log(filter);
            setSearchData(filter);
        } else {
            setSearchData([])
        }
    }

    function clickSearchItem(item) {
        props.history.push(`/product-details/${item.uuid}`)
    }

    return (
        <>
            <HeaderShop {...props}
                clickSearchItem={clickSearchItem}
                onChangeSearch={onChangeSearch}
                searchData={searchData} />
            <TabShop
                onItemSelect={onItemSelect}
                selectedItem={selectedItem}
                pieces={pieces}
                title="Shop"
            />
            <ShopPost data={product.results.slice(0, 4)} />
            <ShopTrending
                data={product.results.slice(4,)}
                count={product.count - 4}
                onPageChange={onPageChange}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <ShopPost data={product.results.slice(4, 8)} />
            <ShopPost data={product.results.slice(8, 12)} />
            <ShopPost data={product.results.slice(12, 16)} />
            {seeMore.results && <ShopPost data={seeMore.results} />}
            <GoBtn text='See more' onClick={clickSeeMore} />
        </>
    )
}


export default Shop;