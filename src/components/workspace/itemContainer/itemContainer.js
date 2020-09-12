import React, { useEffect, useState } from 'react';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import inspirationService from '../../../services/inspiredService';
import productService from '../../../services/productService';
import './itemContainer.css';
import Draggable from 'react-draggable';



function ItemContainer(props) {
    const { openModal, inspirationFilter, productFilter } = props;
    const downarrow = <img className="filter-open" src={require('../../../Asset/Images/arrow-down.png')} alt="cross.png" />
    const [inspiration, setInspiration] = useState({ count: null, next: null, previous: null, results: [] })
    const [products, setProducts] = useState({ count: null, next: null, previous: null, results: [] })


    useEffect(() => {
        let url = '';
        let i = 0;
        Object.keys(inspirationFilter).map((item) => {
            if (inspirationFilter[item].length > 0 && i === 0) {
                url += item + '=' + inspirationFilter[item].join(',')
                i += 1;
            } else if (inspirationFilter[item].length > 0 && i > 0) {
                url += '&' + item + '=' + inspirationFilter[item].join(',')
            }
        })
        if (url === '') {
            (async function () {
                const { data } = await inspirationService.getAllInspired();
                setInspiration(data);
            })()
        } else {
            (async function () {
                const { data } = await inspirationService.getInspirationByUrl(url);
                setInspiration(data);
            })()
        }

    }, [inspirationFilter]);

    useEffect(() => {
        let url = '';
        let i = 0
        Object.keys(productFilter).map((item,) => {
            if (productFilter[item].length > 0 && i === 0) {
                url += item + '=' + productFilter[item].join(',');
                i += 1;
            } else if (productFilter[item].length > 0 && i > 0) {
                url += '&' + item + '=' + productFilter[item].join(',');

            }
        })

        if (url === '') {
            (async function () {
                const { data } = await productService.getAllProducts();
                setProducts(data);
            })()
        } else {
            (async function () {
                const { data } = await productService.getProductByUrl(url);
                setProducts(data);
            })()
        }




    }, [productFilter]);


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
                                    <div className="col-sm-6 workspace-shop priority">
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