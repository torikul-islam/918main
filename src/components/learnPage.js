import React, { useState, useEffect } from 'react';
import LearnHeader from './learnHeader';
import ThreeSlide from './threeSlide';
import HomeCreate from './homeCreate';
import PostSlideThree from './common/postSlideThree';
import HomePostTwo from './homePostTwo';
import resourceService from '../services/resourceService';
import NavbarB from './nav/navbarB';
import './learnPage.css';






function LearnPage(props) {
    const [pageSize, setPageSize] = useState(4);
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setRooms(data.results);
        })()
    }, []);

    function onPageChange(val) {
        if (val === '-') {
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
            <NavbarB {...props} />
            <LearnHeader data={rooms.slice(0, 1)} />
            <ThreeSlide data={rooms.slice(1,)} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
            <HomeCreate data={rooms.slice(1, 2)} />
            <PostSlideThree data={rooms.slice(2, 5)} />
            <HomePostTwo data={rooms.slice(5, 7)} />
            <HomePostTwo data={rooms.slice(7, 9)} />
            <PostSlideThree data={rooms.slice(9, 12)} />
        </>
    );
}

export default LearnPage;
