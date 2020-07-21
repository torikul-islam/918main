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
                <div className="btn-close-modal">
                    <button onClick={closeInsoireFilter}><img src={require('../../../Asset/Icons/cross.png')} alt="cross.png" /></button>
                </div>
                <InspireFilter />
            </div>
        )
    }

    //Modal Component for Shop
    const Shop = () => {
        return (
            <div className="shopModal">
                 <div className="btn-close-modal">
                    <button onClick={closeShopFilter}><img src={require('../../../Asset/Icons/cross.png')} alt="cross.png" /></button>
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
        <div className="titleInspire">
            <div className="row">

                <div className="col-sm-6">
                    <h4>Be Inspire. </h4>
                    <div>
                        <button className="filter" onClick={openInsoireFilter}> Filter Inspire</button>
                        <Modal
                            isOpen={inspirefilter}
                            childComp={<InspireModal />}
                        />
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
                    <h4>Shop.</h4>
                    <div>
                        <button className="filter" onClick={openShopFilter}> Filter Shop</button>

                        <Modal
                            isOpen={shopFilter}
                            childComp={<Shop />}
                        />
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


export default Itemcontainer;