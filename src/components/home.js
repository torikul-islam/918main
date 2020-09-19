import React, { useEffect, useState } from 'react';
import HeaderHome from './headerHome';
import SliderPost from './common/slider/sliderPost';
import ShopSlide from './shop/shopSlide';
import InspiredSlider from './inspired/inspiredSlider';
import resourceServices from '../services/resourceService';
import productServices from '../services/productService';
import ShopThreeSlide from './shop/shopThreeSlide';
import piecesService from '../services/piecesService';
import shopPiecesGroup from '../utils/shopPiecesGroup';
import './home.css';




function Home(props) {
    const [post, setPost] = useState([]);
    const [shop, setShop] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [pieces, setPieces] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchData, setSearchData] = useState([])


    useEffect(() => {
        (async function () {
            const { data } = await piecesService.getAllPieces();
            const pieces = shopPiecesGroup(data.results);
            setPieces(pieces);
            setSelectedItem(pieces[0].name);
            getProductById(pieces[0].ids)
        })()
    }, []);

    async function getProductById(ids) {
        const { data } = await productServices.getProductByPieceId(ids);
        setShop({ count: data.count, next: data.next, previous: data.previous, results: data.results });
    }

    function onItemSelect(item) {
        setSelectedItem(item.name);
        getProductById(item.ids);
        setCurrentPage(0);
    }


    async function onPageChange(val) {
        const diff = shop.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && shop.next !== null) {
                const { data } = await productServices.getProductByUrl(shop.next.split('?')[1]);
                setShop({ count: data.count, next: data.next, previous: data.previous, results: [...shop.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        (async function () {
            const { data: resource } = await resourceServices.getAllResources();
            setPost(resource.results);
        })()
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
        window.addEventListener("scroll", handleResize);
    });


    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }


    function onChangeSearch(e) {
        if (e.target.value) {
            const filter = post.filter(el => el.source.toLowerCase().includes(e.target.value.toLowerCase()) || el.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchData(filter);
        } else {
            setSearchData([])
        }
    }
    function clickSearchItem(item) {
        props.history.push(`/blog/${item.uuid}/${item.rooms[0].id}`)
    }


    return (
        <div>
            <HeaderHome searchData={searchData} clickSearchItem={clickSearchItem} onChangeSearch={onChangeSearch} data={post.slice(0, 1)}  {...props} />
            <SliderPost data={post.slice(1, 5)} />
            <InspiredSlider />
            <SliderPost data={post.slice(5, 9)} />
            <ShopSlide
                pieces={pieces}
                selectedItem={selectedItem}
                onItemSelect={onItemSelect}
                data={shop.results}
                count={shop.count}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange} />

            <SliderPost data={post.slice(9, 13)} />
            <ShopThreeSlide  {...props} />
        </div>
    );
}

export default Home;
