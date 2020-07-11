import React from 'react';
import './homePostTwo.css';




const HomePostTwo = ({ data }) => {
    return (
        <div className='homecreate twoSlide'>
            <div className="container">
                <div className="row">
                    {data.map((item, i) =>
                        <div className="col-sm-6" key={i} >
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="craete-img">
                                        <img src={item.ref_img} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
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

