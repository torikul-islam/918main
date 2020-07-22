import React, { useEffect, useState } from 'react';
import './itemcontainer.css';
import InspireFilter from '../inspirationfilter/inspirationfilter';
import Shopfilter from '../shopfilter/shopfilter';
import resourceService from '../../../services/resourceService';
import productService from '../../../services/productService';
import Modal from '../../common/modal/modal';
import Toggleswitch from '../../common/toggleswitch/toggleswitch';
import DeataileModal from '../detailmodal/detailmodal';
import ProductDetailsTitle from '../../productDetails/productDetailsTitle';


const Itemcontainer = props => {
    const [inspirefilter, setInspireFilter] = useState('');
    const [shopFilter, setShopFilter] = useState('');
    const [detail, setDetails]= useState('');
    const openInsoireFilter = () => setInspireFilter("show");
    const openShopFilter = () => setShopFilter('show');
    const openProductDetails=()=> setDetails('show');
    const closeInsoireFilter = () => setInspireFilter("");
    const closeShopFilter = () => setShopFilter('');
    const closeProductDetails=()=> setDetails('');
    const [resource, setResource] = useState([]);
    const [product, setProduct] = useState([]);

const data = {
    img: '../../../Asset/Images/ins1.png',
    price:"$4543" ,
}
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

    const Details = (data) => {
       
        return (
            <div className="shopModal">
                 <div className="btn-close-modal">
                    <button onClick={closeProductDetails}><img src={require('../../../Asset/Icons/cross.png')} alt="cross.png" /></button>
                </div>
                <DeataileModal data={data} />
            </div>
        )
    }

    return (
        <div className="titleInspire">
            <div className="row">

                <div className="col-sm-6">
                    <h4>Be Inspire. </h4>
                    <div>
                        <button className="filter" onClick={openInsoireFilter}><h6>Filters</h6></button>
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
                    <div className="row"> 
                        <Toggleswitch className="col-sm-4"/>
                        <div className="col-sm-8">
                        <h4 >Shop.</h4>
                        </div>
                    </div>
                    <div>
                        <button className="filter" onClick={openShopFilter}><h6>Filters</h6></button>

                        <Modal
                            isOpen={shopFilter}
                            childComp={<Shop />}
                        />
                    </div>
                    <div className="post-slide-main">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="workimage">
                                    <img src={require('../../../Asset/Images/ins1.png')} alt="ins1.png" onClick={openProductDetails} />
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
                    <Modal
                            isOpen={detail}
                            childComp={<Details data={data}/>}
                        />
                </div>
            </div>
        </div>
    );
};


export default Itemcontainer;