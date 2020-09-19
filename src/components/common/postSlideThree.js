import React from 'react';
import { Link } from 'react-router-dom'
import './postSlideThree.css';
import capitalize from "../../utils/capitalize";


const PostSlideThree = ({ data, compname }) => {
    return (
        <div className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map((item, i) =>
                        <div className="col-sm-4" key={i}>
                            <div className={compname === "learn" ? "image-post-slide-learn" : "image-post-slide"}>
                                <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                    <img src={item.ref_img} alt="" />
                                    <h3>{capitalize(item.title)}</h3>
                                </Link>
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

