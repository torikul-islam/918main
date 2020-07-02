import React, { Component } from 'react';
import PostSlide from '../components/common/postSlide';
import Inspired from './inspired';
import HeaderHome from './headerHome';
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
                <Inspired />
                <PostSlide />
            </>
        );
    }
}

export default Home;