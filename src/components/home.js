import React, { Component } from 'react';
import './home.css';
import PostSlide from '../components/common/postSlide';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <PostSlide />
            </div>
        );
    }
}

export default Home;