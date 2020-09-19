import React, { useState, useEffect } from 'react';
import LearnHeader from './learnHeader';
import ThreeSlide from './threeSlide';
import HomeCreate from './homeCreate';
import PostSlideThree from './common/postSlideThree';
import HomePostTwo from './homePostTwo';
import resourceService from '../services/resourceService';
import roomServices from '../services/roomServices';
// import stylesService from '../services/styleServices';
import NavbarB from './nav/navbarB';
import InfiniteScroll from 'react-infinite-scroller';
import './learnPage.css';






function LearnPage(props) {
    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0);
    const [seeMore, setSeeMore] = useState({ next: null, previous: null, results: [] });
    const [rooms, setRooms] = useState([]);
    // const [styles, setStyles] = useState([]);
    const [selectedItems, setSelectedItems] = useState({ room_ids: null, style_ids: null })
    const [searchData, setSearchData] = useState([])


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource({ count: data.count, next: data.next, previous: data.previous, results: data.results });
            setSeeMore({ next: data.next, previous: null, results: [] });
        })()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, []);


    useEffect(() => {
        (async function () {
            const { data } = await roomServices.getAllRooms();
            setRooms(data.results);
            // const { data: styles } = await stylesService.getAllStyle();
            // setStyles(styles.results);
        })()
    }, []);

    async function onPageChange(val) {
        const diff = resource.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && resource.next !== null) {
                const { data } = await resourceService.getResourcesByUrl(resource.next.split('?')[1]);
                setResource({ count: data.count, next: data.next, previous: data.previous, results: [...resource.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

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
        Object.keys(selected).map((key) => {
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
        const { data } = await resourceService.getResourcesByRoomStyle(url);
        setResource(data);
        setSeeMore({ next: data.next, previous: null, results: [] });
    }

    async function loadFunc() {
        if (seeMore.next !== null) {
            const { data } = await resourceService.getResourcesByUrl(seeMore.next.split('?')[1]);
            setSeeMore({ next: data.next, previous: data.previous, results: [...seeMore.results, ...data.results] });
        }
    }

    function onChangeSearch(e) {
        if (e.target.value) {
            const filter = resource.results.filter(el => el.source.toLowerCase().includes(e.target.value.toLowerCase()) || el.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchData(filter);
        } else {
            setSearchData([])
        }
    }

    function clickSearchItem(item) {
        props.history.push(`/blog/${item.uuid}/${item.rooms[0].id}`)
    }

    return (
        <>
            <NavbarB
                {...props}
                clickSearchItem={clickSearchItem}
                onChangeSearch={onChangeSearch}
                searchData={searchData}
            />
            <LearnHeader data={resource.results.slice(0, 1)} />
            <ThreeSlide
                data={resource.results.slice(1,)}
                count={resource.count}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />

            <HomeCreate
                data={resource.results.slice(1, 2)}
                rooms={rooms}
                // styles={styles}
                onSelectOption={onSelectOption}
                compname="learn"
            />
            <PostSlideThree data={resource.results.slice(2, 5)} compname="learn" />
            <HomePostTwo data={resource.results.slice(5, 7)} />
            <HomePostTwo data={resource.results.slice(7, 9)} />
            <PostSlideThree data={resource.results.slice(9, 12)} compname="learn" />
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
                <PostSlideThree data={seeMore.results} compname="learn" />
            </InfiniteScroll>
        </>
    );
}

export default LearnPage;
