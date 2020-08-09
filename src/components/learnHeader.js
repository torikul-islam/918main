import React from 'react';
import { Link } from 'react-router-dom';
import './learnHeader.css';
import GoBtn from './common/goBtn';
import capitalize from '../utils/capitalize';


const LearnHeader = ({ data }) => {
    return (
        <div className="header-learn">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        {data.map((item, i) =>
                            <div className="learn-text" key={i}>
                                <h3>Learn</h3>
                                <h5>{item.source}</h5>
                                <Link to={`blog/${item.uuid}/${item.rooms[0]}`}>
                                    <h2>{capitalize(item.title)}</h2>
                                </Link>
                                <p>{item.content.substr(0, 120)}</p>
                                <div className="read-more">
                                    <Link to={`blog/${item.uuid}/${item.rooms[0]}`}>
                                        <GoBtn text='Learn More' />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-7">
                        <div className="learnbanner">
                            <img src={require('../Asset/Images/LearnBanner.png')} alt="LearnBanner.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnHeader;


