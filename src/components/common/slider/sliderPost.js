import React from 'react';
import { Link } from 'react-router-dom';
import GoBtn from '../goBtn';
import './slider.css';



const SliderPost = ({ data }) => {
    return (
        <section className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map(item =>
                        <div className="col-sm-3" key={item.uuid}>
                            <div className="image-post-slide">
                                <img src={item.ref_img || ""} alt="" />
                                <h6>{item.title || ""}</h6>
                                <p>{item.source || ""}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="slider_button">
                <Link to='/learn-more'>
                    <GoBtn text='Learn More' />
                </Link>
            </div>
        </section>
    );
}

export default SliderPost;