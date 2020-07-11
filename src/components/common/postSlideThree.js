import React, { Component } from 'react';
import './postSlideThree.css';


const PostSlideThree = ({ data }) => {
    return (
        <div className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map((item, i) =>
                        <div className="col-sm-4">
                            <div className="image-post-slide">
                                <img src={item.ref_img} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <span>{item.source}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostSlideThree;

