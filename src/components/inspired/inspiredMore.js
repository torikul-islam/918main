import React, { useEffect, useState } from 'react';
import HeaderInspired from './headerInspired';
import ShopSlide from './shopSlide';
import ShopSlide3 from './shopSlide3';
import ShopInspired from './shopInspired';
import TabShop from './tabShop';
import inspiredService from '../../services/inspiredService';
import stylesService from '../../services/styleServices';
import ShopThreeSlide from '../shop/shopThreeSlide';
import roomServices from '../../services/roomServices';
import InfiniteScroll from 'react-infinite-scroller';
import '../inspired/inspired.css';



function InspiredMore(props) {
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [inspired, setInspired] = useState({ count: null, next: null, previous: null, results: [] });
    const [rooms, setRooms] = useState([]);
    const [styles, setStyles] = useState([]);
    const [selectedItems, setSelectedItems] = useState({ room_ids: null, style_ids: null })
    const [searchData, setSearchData] = useState([])
    const [seeMore, setSeeMore] = useState({ next: null, previous: null, results: [] });





    useEffect(() => {
        (async function () {
            const { data } = await inspiredService.getAllInspired();
            setInspired({ count: data.count, next: data.next, previous: data.previous, results: data.results });
            setSeeMore({ next: data.next, previous: null, results: [] });
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


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
    });


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
            return url;
        })
        getRoomStyleId(url)
    }

    async function getRoomStyleId(url) {
        const { data } = await inspiredService.getInspiredByRoomOrStyleId(url);
        setInspired({ count: data.count, next: data.next, previous: data.previous, results: data.results });
        setSeeMore({ next: data.next, previous: null, results: [] });
    }

    function onChangeSearch(e) {
        if (e.target.value) {
            const filter = inspired.results.filter(el => el.designed_by.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchData(filter);
        } else {
            setSearchData([])
        }
    }

    async function loadFunc() {
        if (seeMore.next !== null) {
            const { data } = await inspiredService.getInspirationByUrl(seeMore.next.split('?')[1]);
            setSeeMore({ next: data.next, previous: data.previous, results: [...seeMore.results, ...data.results] });
        }
    }

    function clickSearchItem(item) {
        props.history.push(`inspired-details/${item.uuid}/${item.rooms[0]}`);
    }

    return (
        <>
            <HeaderInspired {...props}
                onChangeSearch={onChangeSearch}
                searchData={searchData}
                clickSearchItem={clickSearchItem}
            />
            <TabShop title='Be Inspired.' rooms={rooms} styles={styles} onSelectOption={onSelectOption} />
            <ShopSlide data={inspired.results.slice(0, 4)} pagename="inspired" />

            <ShopInspired
                data={inspired.results.slice(4,)}
                count={inspired.count - 4}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />

            <ShopSlide data={inspired.results.slice(8, 12)} pagename="inspired" />
            <ShopThreeSlide />
            <ShopSlide data={inspired.results.slice(12, 16)} pagename="inspired" />
            <ShopSlide3 data={inspired.results.slice(16, 19)} pagename="inspired" />
            <ShopSlide data={inspired.results.slice(19, 23)} pagename="inspired" />

            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={seeMore.next &&
                    <div className="d-flex justify-content-center mb-3">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            >
                <ShopSlide data={seeMore.results} />
            </InfiniteScroll>
        </>
    );
}

export default InspiredMore;