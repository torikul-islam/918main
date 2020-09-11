import React, { useEffect, useState } from 'react';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import inspirationService from '../../../services/inspiredService';
import productService from '../../../services/productService';
import './itemContainer.css';
import Draggable from 'react-draggable';



function ItemContainer(props) {
    const { openModal, clickFilterImage, product, projectProduct } = props;
    const downarrow = <img className="filter-open" src={require('../../../Asset/Images/arrow-down.png')} alt="cross.png" />
    const [inspiration, setInspiration] = useState({ count: null, next: null, previous: null, results: [] })
    const [products, setProducts] = useState({ count: null, next: null, previous: null, results: [] })


    useEffect(() => {
        (async function () {
            const { data } = await inspirationService.getAllInspired();
            // call the backend server and set response array in setProducts
            setInspiration(data);
        })()
    }, []);

    useEffect(() => {
        (async function () {
            const { data } = await productService.getAllProducts();
            // call the backend server and set response array in setProducts
            setProducts(data);
        })()
    }, []);





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
                                {inspiration && inspiration.results.map((item, i) =>
                                    <Draggable key={i}>
                                        <div className="box boxoverlay">
                                            <img src={item.ref_img} alt="" />
                                        </div>
                                    </Draggable>
                                )}
                                {/* <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins1.png')} alt="ins1.png" />
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins2.png')} alt="ins2.png" />
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins3.png')} alt="ins3.png" />
                                <img onClick={() => clickFilterImage('inspiredImage', {})} src={require('../../../Asset/Images/ins4.png')} alt="ins4.png" /> */}
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
                            {products.results && products.results.map((item, i) =>
                                <Draggable key={i}>
                                    <div className="col-sm-6 workspace-shop">
                                        <div className="box boxoverlay">
                                            <img src={item.ref_img} alt="" />
                                        </div>
                                    </div>
                                </Draggable>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ItemContainer;