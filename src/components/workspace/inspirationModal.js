import React, { useEffect, useState, useContext } from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from "../common/goBtn";
import ShopThreeSlide from '../shop/shopThreeSlide';
import inspirationService from '../../services/inspiredService';
import Modal from '../common/modal/modal';
import Signup from '../auth/signup';
import Login from '../auth/login';
import WorkspaceContext from '../../context/workspaceContext';
import "./workspace.css";



const InspirationModal = (props) => {
    let { closeModal } = props;
    const token = localStorage.getItem('token');
    const [inspirationModal, setInspirationModal] = useState({ isOpen: false, name: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [inspirationLike, setInspirationLike] = useState([]);


    const { projects, handleChangeProjectBoards, addedItemProjectBoards, gotoBoard, setGotoBoard,
        inspirations, setInspirations, modalItem, setModalItem }
        = useContext(WorkspaceContext);

    function openShopModal(name) {
        setInspirationModal({ isOpen: true, name: name });
    };

    function closeShopModal() {
        setInspirationModal({ isOpen: false, name: null })
    };


    async function onPageChange(val) {
        const diff = inspirations.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && inspirations.next !== null) {
                const { data } = await inspirationService.getAllInspired(inspirations.next.split('?')[1]);
                setInspirations({ count: data.count, next: data.next, previous: data.previous, results: [...inspirations.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }


    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await inspirationService.getUserInspirationLike();
                setInspirationLike(data)
            }
        })()
    }, []);

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

    function handleInspiration(item) {
        setGotoBoard(false);
        setModalItem(item);
    }

    async function handleInspirationLike(inspirations) {
        let likes = [...inspirationLike];
        likes.push({ uuid: likes.length, inspiration: inspirations })
        setInspirationLike(likes)

        let form = new FormData();
        form.set('inspiration', inspirations.uuid);
        const token = localStorage.getItem('token');
        if (token) {
            await inspirationService.createInspirationLike(form);
        }
    }

    const { name, isOpen } = inspirationModal;

    let paginateInspiration = [];
    if (inspirations.results) {
        paginateInspiration = paginate(inspirations.results, currentPage, pageSize);
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
                                {inspirationLike.length > 0 && <span className='icon'>
                                    <i
                                        onClick={() => handleInspirationLike(modalItem)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${inspirationLike.some(el => el.inspiration.uuid === modalItem.uuid) ? 'fa fa-heart disable' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>}
                            </div>
                        </div>
                        <div className="col-sm-6 shop-modal-title">
                            {!token ? <div className='text-fav text-center'>
                                <h6>Designed by</h6>
                                <h6>Want to add this item to a moodboard ?</h6>
                                <GoBtn text="Sign Up" type='button' onClick={() => openShopModal('signup')} />
                            </div> :
                                <div className="text-fav text-center">
                                    <h6>{modalItem.designed_by}</h6>
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
                                                        <select name="cars" id="cars" onChange={(e) => handleChangeProjectBoards(e)}
                                                            value={projects.find(x => x.is_active === true).uuid}>
                                                            {projects.map((item, i) =>
                                                                <option key={i} value={item.uuid}>{item.name}</option>
                                                            )}
                                                        </select>
                                                    </li>
                                                    <li className="saveSection">
                                                        <GoBtn text='Save' onClick={() => addedItemProjectBoards(modalItem, 'inspiration')} />
                                                    </li>
                                                </>
                                            }
                                        </ul>
                                    }
                                    {/* <GoBtn text='Add to Shopping List' onClick={() => console.log("Add to cart")} /> */}
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
                                        {paginateInspiration && paginateInspiration.map((item, i) =>
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 pointer' key={i}>
                                                <img onClick={() => handleInspiration(item)} src={item.ref_img} alt="" />
                                                <h2>{item.retailer}</h2>
                                            </div>
                                        )}
                                        <Pagination
                                            itemsCount={inspirations.count}
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

export default InspirationModal;