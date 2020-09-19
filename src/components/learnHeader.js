import React from 'react';
import { Link } from 'react-router-dom';
import './learnHeader.css';
import GoBtn from './common/goBtn';
import capitalize from '../utils/capitalize';


const LearnHeader = ({ data }) => {

    return (
        <div className="header-learn">
            <div className="container-fluid">
                {data.map((item, i) =>
                    <div className="row" key={i}>
                        <div className="col-sm-5">
                            <div className="learn-text">
                                <h3>Learn</h3>
                                <h5>{item.source}</h5>
                                <Link to={`blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                    <h2>{capitalize(item.title)}</h2>
                                </Link>
                                <p>{item.content.substr(0, 120)}</p>
                                <div className="read-more">
                                    <Link to={`blog/${item.uuid}/${item.rooms[0].id}`}>
                                        <GoBtn text='Learn More' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="learnbanner">
                                <Link to={`blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                    <img src={item.ref_img} alt="LearnBanner.png" />
                                    {/* <img src={require('../Asset/Images/LearnBanner.png')} alt="LearnBanner.png" /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LearnHeader;


