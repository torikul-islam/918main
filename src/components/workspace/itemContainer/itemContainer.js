import React, { useContext, useEffect, useState } from 'react';
import inspirationService from '../../../services/inspiredService';
import productService from '../../../services/productService';
import InfiniteScroll from 'react-infinite-scroller';
import './itemContainer.css';
import WorkspaceContext from '../../../context/workspaceContext';



function ItemContainer(props) {
    const { openModal, clickFilterImage, inspirationFilter, productFilter } = props;
    const downarrow = <img className="filter-open" src={require('../../../Asset/Images/arrow-down.png')} alt="cross.png" />
    const [hasMore, setHasMore] = useState(true);

    const { inspirations, setInspirations, products, setProducts, inspirationFilterId, productFilterId } = useContext(WorkspaceContext);

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
                setInspirations(data);
            })()
        } else {
            (async function () {
                const { data } = await inspirationService.getInspirationByUrl(url);
                setInspirations(data);
            })()
        }

    }, [inspirationFilterId]);

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
    }, [productFilterId]);


    async function loadInspiredFunc() {
        if (inspirations.next !== null) {
            const { data } = await inspirationService.getInspirationByUrl(inspirations.next.split('?')[1]);
            setInspirations({ next: data.next, previous: data.previous, results: [...inspirations.results, ...data.results] });
        }
    }

    async function loadProductFunc() {
        if (products.next !== null) {
            const { data } = await productService.getProductByUrl(products.next.split('?')[1]);
            setProducts({ count: data.count, next: data.next, previous: data.previous, results: [...products.results, ...data.results] });
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleHasMore);
        window.addEventListener("resize", handleHasMore);
        window.addEventListener('load', handleHasMore)
        window.addEventListener('loadeddata', handleHasMore)
    });

    function handleHasMore() {
        if (window.innerWidth <= 768) {
            setHasMore(false)
        } else {
            setHasMore(true)
        }
    }

    return (
        <div className="titleInspire">
            <div className="row">
                <div className="col-sm-6">
                    <h4>Be Inspired.</h4>
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
                                loader={inspirations.next &&
                                    <div key={1} className="d-flex justify-content-center mb-3">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="workimage-ins mobilescroll">
                                    {inspirations.results && inspirations.results.map((item, i) =>
                                        <img key={i} onClick={() => clickFilterImage('inspiredImage', item)}
                                            src={item.ref_img} alt="" />
                                    )}
                                    <div onClick={() => loadInspiredFunc()} className="loading"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
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
                                <div onClick={() => loadProductFunc()} className="loading"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ItemContainer;