import React, { Component } from 'react';
import './blog.css';
import BlogHead from '../blog/bloghead';
import SliderPost from '../common/slider/sliderPost';
import axios from 'axios';





class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <BlogHead />
                <SliderPost />
            </>
        );
    }
}

export default Blog;
