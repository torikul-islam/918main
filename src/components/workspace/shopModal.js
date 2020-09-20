import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from "../common/goBtn";
import ShopThreeSlide from '../shop/shopThreeSlide';
import productService from '../../services/productService';
import Modal from '../common/modal/modal';
import Signup from '../auth/signup';
import Login from '../auth/login';
import WorkspaceContext from '../../context/workspaceContext';
import "./workspace.css";



const ShopModal = (props) => {
    const { closeModal, openModal, addShoppingCard } = props;
    const token = localStorage.getItem('token');
    const [shoModal, setShoModal] = useState({ isOpen: false, name: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [productLike, setProductLike] = useState([]);

    const { projects, handleChangeProjectBoards, addedItemProjectBoards, gotoBoard, setGotoBoard,
        modalItem, setModalItem, products, setProducts }
        = useContext(WorkspaceContext);


    function openShopModal(name) {
        setShoModal({ isOpen: true, name: name });
    };

    function closeShopModal() {
        setShoModal({ isOpen: false, name: null })
    };

    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await productService.getUserProductLike();
                setProductLike(data)
            }
        })()
    }, []);


    async function onPageChange(val) {
        const diff = products.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && products.next !== null) {
                const { data } = await productService.getProductByUrl(products.next.split('?')[1]);
                setProducts({ count: data.count, next: data.next, previous: data.previous, results: [...products.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
        window.addEventListener('mousewheel', handleResize)
        window.addEventListener('mousemove', handleResize)
        window.addEventListener('loadeddata', handleResize)
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    function handleProduct(item) {
        setGotoBoard(false)
        setModalItem(item);
    }


    async function handleProductLike(product) {
        let form = new FormData();
        let likes = [...productLike];
        likes.push({ uuid: likes.length, product: product })
        setProductLike([...productLike, { product }]);

        form.set('product', product.uuid);
        const token = localStorage.getItem('token');
        if (token) {
            await productService.createProductLike(form);
        }
    };

    const { name, isOpen } = shoModal;

    let paginateProducts = [];
    if (products) {
        paginateProducts = paginate(products.results, currentPage, pageSize);
    }

    return (
        <div className='container'>
            <div className='cross-icon crossModal' onClick={closeModal}>
                <img src={require('../../Asset/Icons/cross.png')} alt="" />
            </div>
            <div className='container-fluid mb-5 bg-white'>
                <div className='container' >
                    {modalItem && <div className="row" key={modalItem.uuid}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-3">
                            <div className="image-fav-modal">
                                <img src={modalItem.ref_img} alt="" />
                                {productLike.length > 0 && <span className='icon'>
                                    <i
                                        onClick={() => handleProductLike(modalItem)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${productLike.some(el => el.product.uuid === modalItem.uuid) ? 'fa fa-heart disable' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>}
                            </div>
                        </div>
                        <div className="col-sm-6 shop-modal-title">
                            {!token ? <div className='text-fav text-center'>
                                <h6>Retailer Name</h6>
                                <span>Product Name </span>
                                <h6>Want to add this item to a moodboard ?</h6>
                                <GoBtn text="Sign Up" type='button' onClick={() => openShopModal('signup')} />
                            </div> :
                                <div className="text-fav text-center">
                                    <h6>{modalItem.retailer}</h6>
                                    <span>{modalItem.name}</span>
                                    <p>${modalItem.price}</p>
                                    {gotoBoard ? <ul className="menu-name">
                                        <li className="select_design">
                                            <select name="cars" id="cars">
                                                <option value=''>Saved to {projects.find(p => p.is_active === true).name}</option>
                                            </select>
                                        </li>
                                        <li className={`saveSection ${gotoBoard ? 'add' : ''}`}>
                                            <GoBtn text='Go to Board' onClick={() => closeModal()} />
                                        </li>
                                    </ul>
                                        :
                                        <ul className="menu-name">
                                            {projects.length > 0 &&
                                                <>
                                                    <li className="select_design">
                                                        <select name="cars" id="cars"
                                                            onChange={(e) => handleChangeProjectBoards(e)}
                                                            value={projects.find(x => x.is_active === true).uuid}>
                                                            {projects.map((item, i) =>
                                                                <option key={i} value={item.uuid}>{item.name}</option>
                                                            )}
                                                        </select>
                                                    </li>
                                                    <li className="saveSection">
                                                        <GoBtn text='Save' onClick={() => addedItemProjectBoards(modalItem, 'product')} />
                                                    </li>
                                                </>
                                            }
                                        </ul>
                                    }
                                    <GoBtn text='Add to Shopping List' onClick={() => { closeModal(); addShoppingCard(modalItem) }} />
                                </div>
                            }
                        </div>
                    </div>
                    }

                    <div className='row'>
                        <div className="account-slider shop-modal">
                            <div className="col-sm-12">
                                <h3>You may also like.</h3>
                            </div>

                            <div className='tab-index'>
                                <div className='slider small-slide'>
                                    <div className='row'>
                                        {paginateProducts && paginateProducts.map((item, i) =>
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 pointer' key={i}>
                                                <img onClick={() => handleProduct(item)} src={item.ref_img} alt="" />
                                                <h2>{item.retailer}</h2>
                                            </div>
                                        )}
                                        <Pagination
                                            itemsCount={products.count}
                                            pageSize={pageSize}
                                            currentPage={currentPage}
                                            onPageChange={onPageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ShopThreeSlide pagename="workspace" />
                </div>
            </div>
            {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={openShopModal} closeModal={closeShopModal} />} />}
            {name === 'login' && <Modal isOpen={isOpen} childComp={<Login openModal={openShopModal} closeModal={closeShopModal} />} />}
        </div>
    );
}

export default ShopModal;