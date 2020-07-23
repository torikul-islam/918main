import React from 'react';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import './itemContainer.css';


function ItemContainer(props) {
    const { openModal, closeModal } = props;


    return (
        <div className="titleInspire">
            <div className="row">
                <div className="col-sm-6">
                    <h4>Be Inspire. </h4>
                    <div>
                        <button className="filter" onClick={() => openModal('inspired')}>
                            <h6>Filters</h6>
                        </button>

                    </div>
                    <div>
                        <div className="post-slide-main">
                            <div className="workimage">
                                <img src={require('../../../Asset/Images/ins1.png')} alt="ins1.png" />
                                <img src={require('../../../Asset/Images/ins2.png')} alt="ins2.png" />
                                <img src={require('../../../Asset/Images/ins3.png')} alt="ins3.png" />
                                <img src={require('../../../Asset/Images/ins4.png')} alt="ins4.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="row">
                        <Toggleswitch className="col-sm-4" />
                        <div className="col-sm-8">
                            <h4 >Shop.</h4>
                        </div>
                    </div>
                    <div>
                        <button className="filter" onClick={() => openModal('shop')}>
                            <h6>Filters</h6></button>

                    </div>
                    <div className="post-slide-main">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="workimage">
                                    <img src={require('../../../Asset/Images/ins1.png')} alt="ins1.png" />
                                    <img src={require('../../../Asset/Images/ins2.png')} alt="ins2.png" />
                                    <img src={require('../../../Asset/Images/ins3.png')} alt="ins3.png" />
                                    <img src={require('../../../Asset/Images/ins4.png')} alt="ins4.png" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="workimage">
                                    <img src={require('../../../Asset/Images/ins1.png')} alt="ins1.png" />
                                    <img src={require('../../../Asset/Images/ins2.png')} alt="ins2.png" />
                                    <img src={require('../../../Asset/Images/ins3.png')} alt="ins3.png" />
                                    <img src={require('../../../Asset/Images/ins4.png')} alt="ins4.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};


export default ItemContainer;