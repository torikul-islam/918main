import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from "../common/goBtn";
import ShopThreeSlide from '../shop/shopThreeSlide';
import projectServices from '../../services/projectService';
import productService from '../../services/productService';
import Modal from '../common/modal/modal';
import Signup from '../auth/signup';
import Login from '../auth/login';
import "./workspace.css";



const ShopModal = (props) => {
    const { product, closeModal, openModal } = props;
    const token = localStorage.getItem('token');
    const [updateProduct, setUpdateProduct] = useState({});
    const [shoModal, setShoModal] = useState({ isOpen: false, name: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [error, setError] = useState(null);
    const [gotoBoard, setGotoBoard] = useState(false);
    const [project, setProject] = useState([]);
    const [products, setProducts] = useState({ count: null, next: null, previous: null, results: [] });
    const [productLike, setProductLike] = useState([]);


    function openShopModal(name) {
        setShoModal({ isOpen: true, name: name });
    };

    function closeShopModal() {
        setShoModal({ isOpen: false, name: null })
    };

    useEffect(() => {
        setUpdateProduct(product);
    }, [product])


    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await productService.getUserProductLike();
                if (data) {
                    setProductLike(data);
                }
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
        (async function () {
            const { data } = await productService.getAllProducts();
            // call the backend server and set response array in setProducts
            setProducts(data);
        })()
    }, []);

    function addToBoard(product) {
        let data = new FormData();
        if (selectedValue) {
            data.append('project', selectedProject);
            data.append('x_percent', .5);
            data.append('y_percent', .5);
            data.append('z', 1);
            data.append('width', 200);
            data.append('height', 150);
            data.append('product', product.uuid);
            projectServices.addedItemToWorkspace(data);
            localStorage.setItem('boardItem', product.uuid)
            setGotoBoard(true);
        } else {
            setError('Please! select one board.');
        }
    }

    function handleChange(e) {
        setSelectedValue(project.name);
        setSelectedProject(e.target.value)
        setError(null);
    }

    useEffect(() => {
        (async function () {
            if (token) {
                let { data } = await projectServices.getUserProjectProduct();
                // let board = localStorage.getItem('boardName');
                // if (board) {
                // data = [...data, { name: board }]
                // data = data.filter((x, i, a) => a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i);
                setProject(data);
            }
        }
        )()
    }, [token]);


    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
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
        setUpdateProduct(item);
    }


    async function handleProductLike(product) {
        let form = new FormData();
        form.set('product', product.uuid);
        setProductLike([...productLike, { product }]);
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
                    {updateProduct && <div className="row" key={updateProduct.uuid}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-3">
                            <div className="image-fav-modal">
                                <img src={updateProduct.ref_img} alt="" />
                                <span className='icon'>
                                    <i
                                        onClick={() => handleProductLike(updateProduct)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${productLike.some(el => el.product.uuid === updateProduct.uuid) ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>
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
                                    <h6>{updateProduct.retailer}</h6>
                                    <span>{updateProduct.name}</span>
                                    <p>${updateProduct.price}</p>
                                    {gotoBoard ? <ul className="menu-name">
                                        <li className="select_design">
                                            <select name="cars" id="cars">
                                                <option value=''>Saved to {selectedValue}</option>
                                            </select>
                                        </li>
                                        <li className="saveSection">
                                            <GoBtn text='Go to Board' onClick={() => closeModal()} />
                                        </li>
                                    </ul>
                                        :
                                        <ul className="menu-name">
                                            <li className="select_design">
                                                <select name="cars" id="cars" onChange={handleChange}>
                                                    <option value=''>Add to Board</option>
                                                    {/* {project.map(item => */}
                                                    <option key={project.uuid} value={project.uuid}>{project.name}</option>
                                                    {/* )} */}
                                                </select>
                                            </li>
                                            <li className="saveSection">
                                                <GoBtn text='Save' onClick={() => addToBoard(updateProduct)} />
                                            </li>
                                            {error && <h6 className='board-error'>{error}</h6>}
                                        </ul>
                                    }
                                    <GoBtn text='Add to Shopping List' onClick={() => console.log("Add to cart")} />
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
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
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