import React, { Component } from 'react';
import inspiredSlide from '../Asset/Images/inspired_slide_item.png'
import './homeCreate.css';



const HomeCreate = ({ data, rooms, styles, onSelectOption }) => {
    return (

        <div className='homecreate'>
            <div className="container">
                <div className="list-furniture">
                    <ul>
                        <li className="form-group col-sm-2">
                            <select className="form-control" onChange={(e) => onSelectOption(e, 'rooms')}>
                                <option value="">Room</option>
                                {rooms.map((r, i) =>
                                    <option key={i} id={r.pk} value={r.pk}>{r.name}</option>
                                )}

                            </select>
                        </li>
                        <li className="form-group col-sm-2">
                            <select className="form-control" onChange={(e) => onSelectOption(e, 'styles')}>
                                <option value="">Style</option>
                                {styles.map((s, i) =>
                                    <option key={i} id={s.pk} value={s.pk}>{s.name}</option>
                                )}

                            </select>
                        </li>
                        <li>BUYER’S GUIDE</li>
                        <li>DESIGN 101</li>
                    </ul>
                </div>
                <div className="row">
                    {data.map((item, i) =>
                        <div key={i}>
                            <div className="col-sm-6" style={{ float: "left" }}>
                                <div className="craete-img">
                                    <img src={item.ref_img} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6" key={i} style={{ float: "right" }}>
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

