import React, { useEffect, useState } from 'react';
import HeaderHome from './headerHome';
import Modal from './common/modal/modal';
import Signup from './auth/signup';
import Login from './auth/login';
import LoginNext from './auth/loginNext';
import BoardName from './onboard/boardName';
import CreateBoard from './onboard/createBoard';
import SliderPost from './common/slider/sliderPost';
import ShopSlide from './shop/shopSlide';
import InspiredSlider from './inspired/inspiredSlider';
import Onboard from './onboard/onboard';
import roomsTestData from '../../src/testData/rooms.json';
import shopTestData from '../../src/testData/shop.json';
import roomServices from '../services/roomServices';
import ShopThreeSlide from './shop/shopThreeSlide';
import './home.css';




function Home() {
    const [modal, setModal] = useState({ isOpen: true, name: 'login' });
    const [post, setPost] = useState([]);
    // const [rooms, setRooms] = useState([]);
    const [shop, setShop] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);


    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        (async function () {
            // const { data } = await productServices.getAllProducts();
            setShop(shopTestData.results);
            setPost(roomsTestData.results);
        })()
    }, []);



    const { isOpen, name } = modal;
    return (
        <>
            <HeaderHome data={post.slice(0, 1)} openModal={openModal} />
            <SliderPost data={post.slice(1, 5)} />
            <InspiredSlider />
            <SliderPost data={post.slice(5, 9)} />
            <ShopSlide data={shop} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
            <SliderPost data={post.slice(9, 13)} />
            <ShopThreeSlide />

            {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={openModal} closeModal={closeModal} />} />}
            {name === 'login' && <Modal isOpen={isOpen} childComp={<Login openModal={openModal} closeModal={closeModal} />} />}
            {name === 'loginNext' && <Modal isOpen={isOpen} childComp={<LoginNext openModal={openModal} closeModal={closeModal} />} />}
            {name === 'boardName' && <Modal isOpen={isOpen} childComp={<BoardName openModal={openModal} closeModal={closeModal} />} />}
            {name === 'createBoard' && <Modal isOpen={isOpen} childComp={<CreateBoard openModal={openModal} closeModal={closeModal} />} />}
            {name === 'onboard' && <Modal isOpen={isOpen} childComp={<Onboard openModal={openModal} closeModal={closeModal} />} />}
        </>
    );
}

export default Home;





// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: {
//                 isOpen: false,
//                 name: null
//             },
//             postDate: [],
//             rooms: [],
//             shop: [],
//             currentPage: 0,
//             pageSize: 4
//         }
//     }

//     openModal = (name) => {
//         const modal = { ...this.state.modal };
//         modal['isOpen'] = true;
//         modal['name'] = name;
//         this.setState({ modal });
//     };
//     closeModal = () => {
//         const modal = { ...this.state.modal };
//         modal['isOpen'] = false;
//         this.setState({ modal });
//     };

//     componentDidMount() {
//         this.setState({ postDate: roomsTestData.results, shop: shopTestData.results });
//     }

//     onPageChange = (val) => {
//         if (val === '-') {
//             this.setState({ currentPage: this.state.currentPage - 1 })
//         } else {
//             this.setState({ currentPage: this.state.currentPage + 1 })
//         }
//     }

//     getShopData = async () => {
//         const { data } = await axios.get('/products/');
//         this.setState({ shop: data })
//     };

//     getInspiredData = async () => {
//         const { data } = await axios.get('/inspirations/');
//         this.setState({ inspired: data })
//     };

//     render() {
//         const { isOpen, name } = this.state.modal;
//         const { postDate, rooms, shop, currentPage, pageSize } = this.state;
//         return (
//             <>
//                 <HeaderHome data={postDate.slice(0, 1)} openModal={this.openModal} />
//                 <SliderPost data={postDate.slice(1, 5)} />
//                 <InspiredSlider />
//                 <SliderPost data={postDate.slice(5, 9)} />
//                 <ShopSlide data={shop} currentPage={currentPage} pageSize={pageSize} onPageChange={this.onPageChange} />
//                 <SliderPost data={postDate && postDate.slice(9, 13)} />

//                 {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={this.openModal} closeModal={this.closeModal} />} />}
//                 {name === 'loginNext' && <Modal isOpen={isOpen} childComp={<LoginNext {...this.props} openModal={this.openModal} closeModal={this.closeModal} />} />}
//                 {name === 'boardName' && <Modal isOpen={isOpen} childComp={<BoardName openModal={this.openModal} closeModal={this.closeModal} />} />}
//                 {name === 'createBoard' && <Modal isOpen={isOpen} childComp={<CreateBoard openModal={this.openModal} closeModal={this.closeModal} />} />}
//                 {name === 'onboard' && <Modal isOpen={isOpen} childComp={<Onboard openModal={this.openModal} closeModal={this.closeModal} />} />}
//             </>
//         );
//     }
// }

// export default Home;