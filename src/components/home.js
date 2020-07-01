import React, { Component } from 'react';
import './home.css';
import PostSlide from '../components/common/postSlide';
import Inspired from './inspired';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <PostSlide />
                <Inspired />
            </div>
        );
    }
}

export default Home;