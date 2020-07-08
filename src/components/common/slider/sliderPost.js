import React, { Component } from 'react';
import GoBtn from '../goBtn';
import './slider.css';



const SliderPost = ({ data }) => {
    return (
        <section className="post-slide-main">
            <div className="container">
                {data && data.slice(0, 1).map(item =>
                    <div className="width-color-fill">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="image-bg">
                                    <img src={item.ref_img || ""} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-furniture">
                                    <p>{item.source || ""}</p>
                                    <h6>{item.title || ""}</h6>
                                    <p>{item.content || ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row">
                    {data && data.slice(1, 5).map(item =>
                        <div className="col-sm-3" key={item.uuid}>
                            <div className="image-post-slide">
                                <img src={item.ref_img || ""} alt="" />
                                <h6>{item.title || ""}</h6>
                                <p>{item.source || ""}</p>
                            </div>
                        </div>
                    )}



                    {/* <div className="col-sm-3">
                        <div className="image-post-slide">
                            <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                            <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                            <p>Studio McGee</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="image-post-slide">
                            <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                            <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                            <p>Studio McGee</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="image-post-slide">
                            <img src={require('../../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                            <h6>7 Things We’ve Learned About Designing Living Rooms</h6>
                            <p>Studio McGee</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <GoBtn text='Learn More' />
        </section>
    );
}

export default SliderPost;