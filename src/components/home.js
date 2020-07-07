import React, { Component } from 'react';
// import PostSlide from '../components/common/postSlide';
import Inspired from './inspired';
import HeaderHome from './headerHome';
import LearnButton from './common/learnButton';
import SeeMoreButton from './seeMoreButton';
import './home.css';

import Modal from './common/modal/modal';
import Signup from './auth/signup';
import LoginNext from './auth/loginNext';
import BoardName from './onboard/boardName';
import CreateBoard from './onboard/createBoard';
import OnboardQ1 from './onboard/onboardQ1';
import OnboardQ2 from './onboard/onboardQ2';
import OnboardQ3 from './onboard/onboardQ3';
import SliderPost from './common/slider/sliderPost';
import Slider4 from './common/slider/slider4';
import shopData from '../testDate/shop.json';
import inspiredData from '../testDate/inspired.json';




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
        this.setState({ shop: shopData, inspired: inspiredData });
    }

    onPageChange = (type) => {
        if (type === '-') {
            this.setState({ currentPage: this.state.currentPage - 1 })
        } else {
            this.setState({ currentPage: this.state.currentPage + 1 })
        }
    }

    render() {
        const { isOpen, name } = this.state.modal;
        const { shop, pageSize, currentPage, inspired } = this.state;

        return (
            <>
                <HeaderHome openModal={this.openModal} />
                <SliderPost />
                <Slider4 title='Be Inspired' data={inspired && inspired.results.slice(0, 4)} />

                <Slider4 title='shop' data={shop && shop.results.slice(0, 4)} />

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