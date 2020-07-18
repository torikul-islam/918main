import React, { Component } from 'react';
import NavbarB from '../nav/navbarB';
import './lookHead.css';



const LookHead = ({openModal, data, openMenu, handleOpenMenu  }) => {
    return (
        <>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal}/>
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
