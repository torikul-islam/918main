import React, { Component } from 'react';
import Navbar2 from '../navbar2';
import './lookHead.css';



const LookHead = ({ data }) => {
    return (
        <>
            <Navbar2 />
            {data.length > 0 && <div className="look-head">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-look">
                                <h4>Awesome Title Here.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-with-logo">
                                <img src={data[0].ref_img} alt="" />
                                <span className="favIcon">
                                    <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default LookHead;
