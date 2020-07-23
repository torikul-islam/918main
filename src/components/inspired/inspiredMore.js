import React, { useEffect, useState, useReducer } from 'react';
import HeaderInspired from './headerInspired';
import ShopSlide from './shopSlide';
import ShopInspired from './shopInspired';
import TabShop from './tabShop';
import resourceService from '../../services/resourceService';
import productService from '../../services/productService';
import moreService from '../../services/moreServices';
import stylesService from '../../services/styleServices';
import ShopThreeSlide from '../shop/shopThreeSlide';
import '../inspired/inspired.css';
import roomServices from '../../services/roomServices';
import inspiredService from '../../services/inspiredService';
import GoBtn from '../common/goBtn';



function InspiredMore(props) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [resource, setResource] = useState({ next: null, previous: null, results: [] });
    const [seeMore, setSeeMore] = useState({ next: null, previous: null, results: [] });
    const [product, setProduct] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [styles, setStyles] = useState([]);
    const [selectedItems, setSelectedItems] = useState({ room_ids: null, style_ids: null })


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource(data);
            setSeeMore({ next: data.next, previous: null, results: [] });
        })()
    }, []);


    useEffect(() => {
        (async function () {
            const { data } = await productService.getAllProducts();
            setProduct(data.results);
        })()
    }, []);



    useEffect(() => {
        (async function () {
            const { data } = await roomServices.getAllRooms();
            const { data: styles } = await stylesService.getAllStyle();
            setRooms(data.results);
            setStyles(styles.results);
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
    function onSelectOption(e, name) {
        let selected = { ...selectedItems };
        let index = e.target.selectedIndex;
        let el = e.target.childNodes[index]
        let option = el.getAttribute('id');
        if (name === 'rooms') {
            if (option) {
                selected.room_ids = option
            } else {
                selected.room_ids = null;
            }
            setSelectedItems(selected)
        } else if (name === 'styles') {
            if (option) {
                selected.style_ids = option
            } else {
                selected.style_ids = null;
            }
            setSelectedItems(selected)
        }
        let url = '/';
        Object.keys(selected).map((key, i) => {
            if (selected[key] && i === 0) {
                url += `?${key}=${selected[key]}`
            } else if (selected[key] && i > 0) {
                url += `&${key}=${selected[key]}`
            }
        })
        getRoomStyleId(url)
    }
    async function getRoomStyleId(url) {
        const { data } = await inspiredService.getInspiredByRoomOrStyleId(url);
        setResource(data);
        setSeeMore({ next: data.next, previous: null, results: [] });
    }

    async function clickSeeMore() {
        if (seeMore.next) {
            const { data } = await resourceService.getAllResources(`/?${seeMore.next.split('?')[1]}`);
            setSeeMore({ next: data.next, previous: data.previous, results: [...seeMore.results, ...data.results] });
        }
    }
    return (
        <>
            <HeaderInspired {...props} />
            <TabShop title='Be Inspired.' rooms={rooms} styles={styles} onSelectOption={onSelectOption} />
            <ShopSlide data={resource.results.slice(0, 4)} />
            <ShopInspired data={resource.results.slice(4,)} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            <ShopSlide data={resource.results.slice(8, 12)} />
            <ShopThreeSlide />
            <ShopSlide data={resource.results.slice(12, 16)} />
            <ShopSlide data={resource.results.slice(16, 19)} />
            <ShopSlide data={resource.results.slice(19, 23)} />
            {seeMore.results && <ShopSlide data={seeMore.results} />}
            <GoBtn text='See more' onClick={clickSeeMore} />
        </>
    );
}

export default InspiredMore;