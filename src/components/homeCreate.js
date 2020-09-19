import React from 'react';
import { Link } from 'react-router-dom';
import capitalize from '../utils/capitalize';
import './homeCreate.css';



const HomeCreate = ({ data, rooms, onSelectOption, compname }) => {
    return (
        <div className='homecreate'>
            <div className="container">
                <div className="list-furniture">
                    <ul>
                        <li className="form-group col-md-2 col-5 marginFlex">
                            <select className="form-control" onChange={(e) => onSelectOption(e, 'rooms')}>
                                <option value="">ROOM</option>
                                {rooms.map((r, i) =>
                                    <option key={i} id={r.pk} value={r.pk}>{r.name.toUpperCase()}</option>
                                )}
                            </select>
                        </li>
                        {/* <li className="form-group col-md-2 col-5 marginFlex">
                            <select className="form-control" onChange={(e) => onSelectOption(e, 'styles')}>
                                <option value="">STYLE</option>
                                {styles.map((s, i) =>
                                    <option key={i} id={s.pk} value={s.pk}>{s.name.toUpperCase()}</option>
                                )}
                            </select>
                        </li> */}
                        <li>STYLE</li>
                        <li>BUYER’S GUIDE</li>
                        <li>DESIGN 101</li>
                    </ul>
                </div>
                <div className="row">
                    {data.map((item, i) =>
                        <div key={i}>
                            <div className="col-sm-6" style={{ float: "left" }}>
                                <div className={compname === "learn" ? "craete-img-learn" : "craete-img"}>
                                    <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`}>
                                        <img src={item.ref_img} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6" key={i} style={{ float: "right" }}>
                                <div className="craete-text-hero" >
                                    <h5>{item.source}</h5>
                                    <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                        <h2>{capitalize(item.title)}</h2>
                                    </Link>
                                    <p>{item.content}</p>
                                    <div className="read-more">
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                            <button>Read More</button>
                                        </Link>
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

