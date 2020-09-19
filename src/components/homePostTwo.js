import React from 'react';
import { Link } from 'react-router-dom';
import './homePostTwo.css';
import capitalize from '../utils/capitalize';




const HomePostTwo = ({ data }) => {
    return (
        <div className='homecreate twoSlide'>
            <div className="container">
                <div className="row">
                    {data.map((item, i) =>
                        <div className="col-sm-6" key={i} >
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="craete-img">
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`}>
                                            <img src={item.ref_img} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="craete-text">
                                        <h5>{item.source}</h5>
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                            <h2>{capitalize(item.title)}</h2>
                                        </Link>
                                        <p>{item.content}</p>
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

export default HomePostTwo;

