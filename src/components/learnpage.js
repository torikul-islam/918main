import React, { Component } from 'react';
import Navbar from '../components/navbar';
import LearnHeader from '../components/learnHeader';
import ThreeSlide from '../components/threeSlide';
import HomeCreate from '../components/homeCreate';
import PostSlideThree from '../components/common/postSlideThree';
import HomePostTwo from '../components/homePostTwo'
import './learnpage.css';

class LearnPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar />
                <LearnHeader />
                <ThreeSlide />
                <HomeCreate />
                <PostSlideThree />
                <HomePostTwo />
                <HomePostTwo />
                <PostSlideThree />
            </div>
        );
    }
}

export default LearnPage;
