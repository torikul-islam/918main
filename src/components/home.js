import React, { useEffect, useState } from 'react';
import HeaderHome from './headerHome';
import SliderPost from './common/slider/sliderPost';
import ShopSlide from './shop/shopSlide';
import InspiredSlider from './inspired/inspiredSlider';
import resourceServices from '../services/resourceService';
import productServices from '../services/productService';
import ShopThreeSlide from './shop/shopThreeSlide';
import './home.css';



function Home(props) {
    const [post, setPost] = useState([]);
    const [shop, setShop] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);


    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            const { data: resource } = await resourceServices.getAllResources();
            setShop(data.results);
            setPost(resource.results);
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


    return (
        <div>
            <HeaderHome data={post.slice(0, 1)}  {...props} />
            <SliderPost data={post.slice(1, 5)} />
            <InspiredSlider />
            <SliderPost data={post.slice(5, 9)} />
            <ShopSlide data={shop} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
            <SliderPost data={post.slice(9, 13)} />
            <ShopThreeSlide />

        </div>
    );
}

export default Home;
