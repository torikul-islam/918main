import React, { Component } from 'react';
import PostSlide from '../components/common/postSlide';
import Inspired from './inspired';
import HeaderHome from './headerHome';
import LearnButton from './common/learnButton'
import './home.css';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <HeaderHome />
                <PostSlide />
                <LearnButton />
                <Inspired />
                <PostSlide />
            </>
        );
    }
}

export default Home;