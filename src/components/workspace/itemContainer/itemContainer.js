import React from 'react';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import './itemContainer.css';
import Draggable from 'react-draggable';



function ItemContainer(props) {
    const { openModal, clickFilterImage, product, projectProduct } = props;
    const downarrow = <img className="filter-open" src={require('../../../Asset/Images/arrow-down.png')} alt="cross.png" />



    return (
        <div className="titleInspire">
            <div className="row">
                <div className="col-sm-6">
                    <h4>Be Inspire. </h4>
                    <div>
                        <button className="filter" onClick={() => openModal('inspired')}>
                            <h6>Filters {downarrow}</h6>
                        </button>
                    </div>
                    <div>
                        <div className="post-slide-main-item">
                            <div className="workimage-ins">
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins1.png')} alt="ins1.png" />
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins2.png')} alt="ins2.png" />
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins3.png')} alt="ins3.png" />
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins4.png')} alt="ins4.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="row">
                        <Toggleswitch className="col-sm-4" />
                        <div className="col-sm-8">
                            <h4 >Shop.</h4>
                            <div>
                                <button className="filter shopfilter" onClick={() => openModal('shop')}>
                                    <h6>Filters {downarrow}</h6></button>

                            </div>
                        </div>
                    </div>
                    <div className="post-slide-main-item">
                        <div className="row">
                            <div className="col-sm-6 workspace-shop">
                                {projectProduct.workspace_items && projectProduct.workspace_items.map((item, i) =>
                                    <img key={i} className='shop-image' onClick={() => clickFilterImage('shopImage', item)}
                                        src={item.product.ref_img}
                                        alt="" />
                                )}
                                {/* <div className="workimage-shop" style={{ position: 'absolute' }}>
                                    <Draggable>
                                        <img src={require('../../../Asset/Images/shop1.png')} alt="ins1.png" />
                                    </Draggable>
                                    <img
                                        onClick={() => clickFilterImage('shopImage', {})}
                                        src={require('../../../Asset/Images/shop3.png')} alt="ins2.png"

                                    />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop5.png')} alt="ins3.png" />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop7.png')} alt="ins4.png" />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop9.png')} alt="ins4.png" />
                                </div> */}
                            </div>
                            <div className="col-sm-6">
                                <div className="workimage-shop">
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop2.png')} alt="ins1.png" />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop4.png')} alt="ins2.png" />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop6.png')} alt="ins3.png" />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop8.png')} alt="ins4.png" />
                                    <img onClick={() => clickFilterImage('shopImage', {})} src={require('../../../Asset/Images/shop10.png')} alt="ins4.png" />
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