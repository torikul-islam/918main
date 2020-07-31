import React from 'react';
import './shopSlide.css';
import { Link } from 'react-router-dom';



const ShopSlide = ({ data, pagename }) => {
    return (
        <div className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map((item, i) =>
                        <div className="col-sm-3" key={i}>
                            <div className="image-post-slide">
                                <Link to={`/inspired-details/${item.uuid}/${item.rooms[0]}`} className='remove-u-line'>
                                    <img src={item.ref_img} alt="" />
                                    <div className={pagename === "inspired" ? "image-post-slide-ins" : "image-post-slide"}>
                                        <h6>{item.designed_by}</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShopSlide;
