import React, { useEffect, useState } from 'react';
import './itemcontainer.css';
import InspireFilter from '../inspirationfilter/inspirationfilter';
import Shopfilter from '../shopfilter/shopfilter';
import resourceService from '../../../services/resourceService';
import productService from '../../../services/productService';
import Modal from '../../common/modal/modal';


const Itemcontainer = props => {
    const [inspirefilter, setInspireFilter] = useState('');
    const [shopFilter, setShopFilter] = useState(false);
    const openInsoireFilter = () => setInspireFilter("show");
    const openShopFilter = () => setShopFilter('show');
    const closeInsoireFilter = () => setInspireFilter("");
    const closeShopFilter = () => setShopFilter('');
    const [resource, setResource] = useState([]);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getAllResources();
            setResource(data.results);
        })()
    }, []);


    useEffect(() => {
        (async function () {
            const { data } = await productService.getAllProducts();
            setProduct(data.results);
        })()
    }, []);


    //Modal Component for Inspire 
    const InspireModal = () => {
        return (
            <div className="inspirModal">
                <div >
                    <button onClick={closeInsoireFilter}>close modal</button>
                </div>
                <InspireFilter />
            </div>
        )
    }

    //Modal Component for Shop
    const Shop = () => {
        return (
            <div className="shopModal">
                <div >
                    <button onClick={closeShopFilter}>close modal</button>
                </div>
                <Shopfilter />
            </div>
        )
    }

    const Details = () => {
        return (
            <div className="detailsModal">
                <div>
                    <button> </button>
                </div>
            </div>
        )
    }

    return (
        <div className="row">

            <div className="col">
                <div>
                    Be Inspire
                 </div>
                <div>
                    <button onClick={openInsoireFilter}> Filter Inspire</button>
                    <Modal
                        isOpen={inspirefilter}
                        childComp={<InspireModal />}
                    />
                </div>
                <div>
                    <div className="post-slide-main">
                        <div className="container">
                            <div className="col">
                                {resource && resource.map((item, i) =>
                                    <div className="col-sm-3" key={i}>
                                        <div className="image-post-slide">
                                            <img src={item.ref_img} alt="" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div>
                    Shop
                </div>
                <div>
                    <button onClick={openShopFilter}> Filter Shop</button>
                    <Modal
                        isOpen={shopFilter}
                        childComp={<Shop />}
                    />
                </div>

                <div className="post-slide-main">
                    <div className="container">
                        <div className="col">
                            {product && product.map((item, i) =>
                                <div className="col-sm-3" key={i} >
                                    <div className="image-post-slide" >
                                        <img src={item.ref_img} alt="" />
                                        <Modal
                                            isOpen={shopFilter}
                                            childComp={<Details />}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};


export default Itemcontainer;