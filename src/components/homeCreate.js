import React, { Component } from 'react';
import inspiredSlide from '../Asset/Images/inspired_slide_item.png'
import './homeCreate.css';



const HomeCreate = ({ data }) => {
    return (

        <div className='homecreate'>
            <div className="container">
                <div className="list-furniture">
                    <ul>
                        <li>ROOM</li>
                        <li>STYLING</li>
                        <li>BUYER’S GUIDE</li>
                        <li>DESIGN 101</li>
                    </ul>
                </div>
                <div className="row">
                    {data.map((item, i) =>
                        <div key={i}>
                            <div className="col-sm-6">
                                <div className="craete-img">
                                    <img src={item.ref_img} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6" key={i}>
                                <div className="craete-text" >
                                    <h5>{item.source}</h5>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                    <div className="read-more">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeCreate;

