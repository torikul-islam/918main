import React, { useEffect, useState } from 'react';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import inspirationService from '../../../services/inspiredService';
import productService from '../../../services/productService';
import './itemContainer.css';
import Draggable from 'react-draggable';
import paginate from '../../../utils/paginate';



function ItemContainer(props) {
    const { openModal, inspirationFilter, productFilter } = props;
    const downarrow = <img className="filter-open" src={require('../../../Asset/Images/arrow-down.png')} alt="cross.png" />
    const [inspiration, setInspiration] = useState({ count: null, next: null, previous: null, results: [] })
    const [products, setProducts] = useState({ count: null, next: null, previous: null, results: [] })
    const [curPageInspired, setCurPageInspired] = useState(0);
    const [inspiredPageSize, setInspiredPageSize] = useState(3);

    const [curPageProduct, setCurPageProduct] = useState(0);
    const [productPageSize, setProductPageSize] = useState(14);



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

    async function onPageChangeInspired(val) {
        const diff = inspiration.results.length - (curPageInspired * inspiredPageSize * 2);
        if (val === '-' && curPageInspired >= 0) {
            setCurPageInspired(curPageInspired - 1)
        } else {
            if (diff < inspiredPageSize && inspiration.next !== null) {
                const { data } = await inspirationService.getInspirationByUrl(inspiration.next.split('?')[1]);
                setInspiration({ count: data.count, next: data.next, previous: data.previous, results: [...inspiration.results, ...data.results] });
            }
            setCurPageInspired(curPageInspired + 1)
        }
    }

    async function onPageChangeProduct(val) {
        const diff = products.results.length - (curPageProduct * productPageSize * 2);
        if (val === '-' && curPageProduct >= 0) {
            setProductPageSize(curPageProduct - 1)
        } else {
            if (diff < productPageSize && products.next !== null) {
                const { data } = await productService.getProductByUrl(products.next.split('?')[1]);
                setProducts({ count: data.count, next: data.next, previous: data.previous, results: [...products.results, ...data.results] });
            }
            setProductPageSize(curPageInspired + 1)
        }
    }

    let insPaginate = paginate(inspiration.results, curPageInspired, inspiredPageSize);
    let prodPaginate = paginate(products.results, curPageProduct, productPageSize);

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
                                {insPaginate && insPaginate.map((item, i) =>
                                    <Draggable key={i}>
                                        <div className="box boxoverlay">
                                            <img src={item.ref_img} alt="" />
                                        </div>
                                    </Draggable>
                                )}
                            </div>
                            <div className="arrows">
                                <div onClick={() => onPageChangeInspired("-")} className="arrow-pag left">
                                    <img src={require('../../../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
                                </div>
                                <div onClick={() => onPageChangeInspired("+")} className="arrow-pag right" >
                                    <img src={require('../../../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
                                </div>
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
                            {prodPaginate && prodPaginate.map((item, i) =>
                                <Draggable key={i}>
                                    <div className="col-sm-6 workspace-shop priority">
                                        <div className="box boxoverlay">
                                            <img src={item.ref_img} alt="" />
                                        </div>
                                    </div>
                                </Draggable>
                            )}
                        </div>
                        <div className="arrows">
                            <div onClick={() => onPageChangeProduct('-')} className="arrow-pag left">
                                <img src={require('../../../Asset/Images/arrow-left.png')} alt="arrow-left.png" />
                            </div>
                            <div onClick={() => onPageChangeProduct('+')} className="arrow-pag right" >
                                <img src={require('../../../Asset/Images/arrow-right.png')} alt="arrow-right.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ItemContainer;