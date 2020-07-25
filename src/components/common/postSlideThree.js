import React from 'react';
import { Link } from 'react-router-dom'
import './postSlideThree.css';


const PostSlideThree = ({ data, compname }) => {
    return (
        <div className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map((item, i) =>
                        <div className="col-sm-4" key={i}>
                            <div className={compname == "learn" ? "image-post-slide-learn" : "image-post-slide"}>
                                <Link to={`/learn-details/${item.uuid}/${item.rooms[0]}`}>
                                    <img src={item.ref_img} alt="" />
                                </Link>
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

