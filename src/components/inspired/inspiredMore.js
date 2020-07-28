import React, { useEffect, useState } from 'react';
import HeaderInspired from './headerInspired';
import ShopSlide from './shopSlide';
import ShopInspired from './shopInspired';
import TabShop from './tabShop';
import inspiredService from '../../services/inspiredService';
import productService from '../../services/productService';
import stylesService from '../../services/styleServices';
import ShopThreeSlide from '../shop/shopThreeSlide';
import roomServices from '../../services/roomServices';
import '../inspired/inspired.css';



function InspiredMore(props) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [inspired, setInspired] = useState({ count: null, next: null, previous: null, results: [] });
    const [product, setProduct] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [styles, setStyles] = useState([]);
    const [selectedItems, setSelectedItems] = useState({ room_ids: null, style_ids: null })


    useEffect(() => {
        (async function () {
            const { data } = await inspiredService.getAllInspired();
            setInspired({ count: data.count, next: data.next, previous: data.previous, results: data.results });
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

    async function onPageChange(val) {
        const diff = inspired.results.length - (currentPage * pageSize * 2);

        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && inspired.next !== null) {
                const { data } = await inspiredService.getInspirationByUrl(inspired.next.split('?')[1]);
                setInspired({ count: data.count, next: data.next, previous: data.previous, results: [...inspired.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
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
        Object.keys(selected).map(key => {
            if (selected[key] && url === '/') {
                url += `?${key}=${selected[key]}`
            } else if (selected[key]) {
                url += `&${key}=${selected[key]}`
            }
        })
        getRoomStyleId(url)
    }

    async function getRoomStyleId(url) {
        const { data } = await inspiredService.getInspiredByRoomOrStyleId(url);
        setInspired({ count: data.count, next: data.next, previous: data.previous, results: data.results });
    }


    return (
        <>
            <HeaderInspired {...props} />
            <TabShop title='Be Inspired.' rooms={rooms} styles={styles} onSelectOption={onSelectOption} />
            <ShopSlide data={inspired.results.slice(0, 4)} pagename="inspired" />

            <ShopInspired
                data={inspired.results.slice(4,)}
                count={inspired.count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />

            <ShopSlide data={inspired.results.slice(8, 12)} pagename="inspired" />
            <ShopThreeSlide />
            <ShopSlide data={inspired.results.slice(12, 16)} pagename="inspired" />
            <ShopSlide data={inspired.results.slice(16, 19)} pagename="inspired"/>
            <ShopSlide data={inspired.results.slice(19, 23)} pagename="inspired"/>

        </>
    );
}

export default InspiredMore;