import React, { Component } from 'react';
import HeaderHome from './headerHome';
import Modal from './common/modal/modal';
import Signup from './auth/signup';
import LoginNext from './auth/loginNext';
import BoardName from './onboard/boardName';
import CreateBoard from './onboard/createBoard';
import OnboardQ1 from './onboard/onboardQ1';
import OnboardQ2 from './onboard/onboardQ2';
import OnboardQ3 from './onboard/onboardQ3';
import SliderPost from './common/slider/sliderPost';
import axios from 'axios';
import ShopSlide from './shop/shopSlide';
import InspiredSlider from './inspired/inspiredSlider';
import roomsTestData from '../../src/testData/rooms.json';
import './home.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: {
                isOpen: false,
                name: null
            },
            currentPage: 0,
            pageSize: 4
        }
    }

    openModal = (name) => {
        const modal = { ...this.state.modal };
        modal['isOpen'] = true;
        modal['name'] = name;
        this.setState({ modal });
    };
    closeModal = () => {
        const modal = { ...this.state.modal };
        modal['isOpen'] = false;
        this.setState({ modal });
    };

    componentDidMount() {
        this.setState({ postDate: roomsTestData });

    }

    onPageChange = (type) => {
        if (type === '-') {
            this.setState({ currentPage: this.state.currentPage - 1 })
        } else {
            this.setState({ currentPage: this.state.currentPage + 1 })
        }
    }

    getShopData = async () => {
        const { data } = await axios.get('/products/');
        this.setState({ shop: data })
    };

    getInspiredData = async () => {
        const { data } = await axios.get('/inspirations/');
        this.setState({ inspired: data })
    };

    render() {
        const { isOpen, name } = this.state.modal;
        const { postDate } = this.state;
        return (
            <>
                <HeaderHome data={postDate && postDate.results.slice(0, 1)} openModal={this.openModal} />


                <InspiredSlider />

                <SliderPost data={postDate && postDate.results.slice(1, 5)} />

                <ShopSlide />


                <SliderPost data={postDate && postDate.results.slice(5, 9)} />

                {/* <SliderPost data={postDate && postDate.results.slice(9, 13)} /> */}


                {/* <PostSlide />
                <LearnButton />
                <Inspired />
                <SeeMoreButton />
                <PostSlide />
                <LearnButton />
                <Inspired />
                <SeeMoreButton />
                <PostSlide /> */}

                {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={this.openModal} closeModal={this.closeModal} />} />}
                {name === 'loginNext' && <Modal isOpen={isOpen} childComp={<LoginNext {...this.props} openModal={this.openModal} closeModal={this.closeModal} />} />}
                {name === 'boardName' && <Modal isOpen={isOpen} childComp={<BoardName openModal={this.openModal} closeModal={this.closeModal} />} />}
                {name === 'createBoard' && <Modal isOpen={isOpen} childComp={<CreateBoard openModal={this.openModal} closeModal={this.closeModal} />} />}
                {name === 'onboardQ1' && <Modal isOpen={isOpen} childComp={<OnboardQ1 openModal={this.openModal} closeModal={this.closeModal} />} />}
                {name === 'onboardQ2' && <Modal isOpen={isOpen} childComp={<OnboardQ2 openModal={this.openModal} closeModal={this.closeModal} />} />}
                {name === 'onboardQ3' && <Modal isOpen={isOpen} childComp={<OnboardQ3 openModal={this.openModal} closeModal={this.closeModal} />} />}
            </>
        );
    }
}

export default Home;