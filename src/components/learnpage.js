import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import LearnHeader from '../components/learnHeader';
import ThreeSlide from '../components/threeSlide';
import HomeCreate from '../components/homeCreate';
import PostSlideThree from '../components/common/postSlideThree';
import HomePostTwo from '../components/homePostTwo';
import resourceService from '../services/resourceService';
import NavbarB from './nav/navbarB';
import './learnpage.css';
import Card from './card/card';






function LearnPage({ handleOpenMenu, openMenu, openModal, clickCard }) {
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
            <NavbarB
                clickCard={clickCard}
                openMenu={openMenu}
                handleOpenMenu={handleOpenMenu}
                openModal={openModal} />
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



// class LearnPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }



//     render() {
//         return (
//             <div>
//                 <Navbar2 />
//                 <LearnHeader />
//                 <ThreeSlide />
//                 <HomeCreate />
//                 <PostSlideThree />
//                 <HomePostTwo />
//                 <HomePostTwo />
//                 <PostSlideThree />
//             </div>
//         );
//     }
// }

// export default LearnPage;
