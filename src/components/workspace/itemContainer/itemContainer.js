import React, { useEffect, useState } from 'react';
import inspirationService from '../../../services/inspiredService';
import productService from '../../../services/productService';
import InfiniteScroll from 'react-infinite-scroller';
import './itemContainer.css';
import HorizontalScroll from 'react-scroll-horizontal'
import ReactList from 'react-list';



function ItemContainer(props) {
    const { openModal, clickFilterImage, inspirationFilter, productFilter } = props;
    const downarrow = <img className="filter-open" src={require('../../../Asset/Images/arrow-down.png')} alt="cross.png" />
    const [inspiration, setInspiration] = useState({ count: null, next: null, previous: null, results: [] })
    const [products, setProducts] = useState({ count: null, next: null, previous: null, results: [] })
    const [hasMore, setHasMore] = useState(true);


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

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setHasMore(false)
        }
        console.log('width', window.innerWidth);
    })



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
                                hasMore={hasMore}
                                useWindow={false}
                                loader={inspiration.next &&
                                    <div key={1} className="d-flex justify-content-center mb-3">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="workimage-ins mobilescroll">
                                    {inspiration.results && inspiration.results.map((item, i) =>
                                        <img key={i} onClick={() => clickFilterImage('inspiredImage', item)}
                                            src={item.ref_img} alt="" />
                                    )}
                                    <div className="loading"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
                                </div>
                            </InfiniteScroll>

                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4 >Shop.</h4>
                            <div>
                                <button className="filter shopfilter" onClick={() => openModal('shop')}>
                                    <h6>Filters {downarrow}</h6></button>

                            </div>
                        </div>
                    </div>
                    <div className="post-slide-main-item">
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={loadProductFunc}
                            hasMore={hasMore}
                            useWindow={false}
                            loader={products.next &&
                                <div key={1} className="d-flex justify-content-center mb-3">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            }
                        >
                            <div className="workimage-ins mobilescroll row" >
                                {products.results && products.results.map((item, i) =>
                                    <div className='widthshopImage' key={i} >
                                        <img onClick={() => clickFilterImage('shopImage', item)}
                                            src={item.ref_img} alt="" />
                                    </div>                                    
                                )}
                                <div className="loading"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ItemContainer;