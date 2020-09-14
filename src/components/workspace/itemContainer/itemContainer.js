import React, { useEffect, useState } from 'react';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import inspirationService from '../../../services/inspiredService';
import productService from '../../../services/productService';
import './itemContainer.css';
import Draggable from 'react-draggable';
import paginate from '../../../utils/paginate';
import InfiniteScroll from 'react-infinite-scroller';



function ItemContainer(props) {
    const { openModal, clickFilterImage, inspirationFilter, productFilter } = props;
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


    async function loadInspiredFunc() {
        if (inspiration.next !== null) {
            const { data } = await inspirationService.getInspirationByUrl(inspiration.next.split('?')[1]);
            setInspiration({ next: data.next, previous: data.previous, results: [...inspiration.results, ...data.results] });
        }
    }
    async function loadProductFunc() {
        if (products.next !== null) {
            const { data } = await productService.getProductByUrl(products.next.split('?')[1]);
            setProducts({ count: data.count, next: data.next, previous: data.previous, results: [...products.results, ...data.results] });
        }
    }



    return (
        <div className="titleInspire">
            <div className="row">
                <div className="col-sm-6">
                    <h4>Be Inspired. </h4>
                    <div>
                        <button className="filter" onClick={() => openModal('inspired')}>
                            <h6>Filters {downarrow}</h6>
                        </button>
                    </div>
                    <div>
                        <div className="post-slide-main-item">
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={loadInspiredFunc}
                                hasMore={true || false}
                                loader={inspiration.next &&
                                    <div class="d-flex justify-content-center mb-3">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="workimage-ins">
                                    {inspiration.results && inspiration.results.map((item, i) =>
                                        <img key={i} onClick={() => clickFilterImage('inspiredImage', item)}
                                            src={item.ref_img} alt="" />
                                    )}
                                </div>
                            </InfiniteScroll>


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
                        {/* <div className="row"> */}
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={loadProductFunc}
                            hasMore={true || false}
                            loader={products.next &&
                                <div class="d-flex justify-content-center mb-3">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            }
                        >
                            <div className="workimage-ins row" >
                                {products.results && products.results.map((item, i) =>
                                    <div className='col-sm-6'>
                                        <img key={i} onClick={() => clickFilterImage('shopImage', item)}
                                            src={item.ref_img} alt="" />
                                    </div>
                                )}
                            </div>
                        </InfiniteScroll>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ItemContainer;