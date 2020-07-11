import React, { Component } from 'react';
import './learnHeader.css';





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
                                <h2>{item.title}</h2>
                                <p>{item.content.substr(0, 120)}</p>
                                <div className="read-more">
                                    <button>Learn More</button>
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


