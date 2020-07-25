import React from 'react';
import { Link } from 'react-router-dom';
import './homePostTwo.css';




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
                                        <Link to={`/learn-details/${item.uuid}/${item.rooms[0]}`}>
                                            <img src={item.ref_img} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="craete-text">
                                        <h5>{item.source}</h5>
                                        <h2>{item.title}</h2>
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

