import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from "../common/goBtn";
import ShopThreeSlide from '../shop/shopThreeSlide';
import projectServices from '../../services/projectService';
import inspirationService from '../../services/inspiredService';
import "./workspace.css";
import Modal from '../common/modal/modal';
import Signup from '../auth/signup';
import Login from '../auth/login';



const InspirationModal = (props) => {
    let { inspirationItem, closeModal, openModal } = props;
    const [updateInspiration, setUpdateInspiration] = useState({})
    const token = localStorage.getItem('token');
    const [inspirationModal, setInspirationModal] = useState({ isOpen: false, name: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [error, setError] = useState(null);
    const [gotoBoard, setGotoBoard] = useState(false);
    const [inspiration, setInspiration] = useState({ count: null, next: null, previous: null, results: [] });
    const [inspirationLike, setInspirationLike] = useState([]);
    const [project, setProject] = useState([]);
    const [projectBoardName, setProjectBoardName] = useState([]);
    const [userProject, setUserProject] = useState({});



    function openShopModal(name) {
        setInspirationModal({ isOpen: true, name: name });
    };

    function closeShopModal() {
        setInspirationModal({ isOpen: false, name: null })
    };

    useEffect(() => {
        setUpdateInspiration(inspirationItem)
    }, [inspirationItem])


    useEffect(() => {
        const token = localStorage.getItem('token');
        (async function () {
            if (token) {
                let { data } = await projectServices.getUserProjectProduct();
                // call the backend server and set response array in setProducts
                setUserProject(data);
            }
        })()
    }, [selectedValue, localStorage.getItem('boardItem')]);


    async function onPageChange(val) {
        const diff = inspiration.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && inspiration.next !== null) {
                const { data } = await inspirationService.getAllInspired(inspiration.next.split('?')[1]);
                setInspiration({ count: data.count, next: data.next, previous: data.previous, results: [...inspiration.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        (async function () {
            const { data } = await inspirationService.getAllInspired();
            // call the backend server and set response array in setProducts
            setInspiration(data);
        })()
    }, []);

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
        (async function () {
            if (token) {
                let { data } = await projectServices.getAllProjectName();
                let board = localStorage.getItem('boardName');
                if (data && board) {
                    const firstIdx = data.find(b => b.name.toLowerCase() === board.toLowerCase())
                    data = data.filter((x, i, a) => (a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i) && firstIdx.uuid !== x.uuid);
                    setProjectBoardName([{ ...firstIdx }, ...data]);
                    setSelectedValue(firstIdx.name);
                    setSelectedProject(firstIdx.uuid)
                } else {
                    data = data.filter((x, i, a) => a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i);
                    setProjectBoardName(data);
                    setSelectedValue(data[0].name)
                    setSelectedProject(data[0].uuid)
                }
            }
        }
        )()
    }, [token]);

    async function addToBoard(inspiration) {
        let data = new FormData();
        if (selectedValue) {
            data.append('project', selectedProject);
            data.append('x_percent', .5);
            data.append('y_percent', .5);
            data.append('z', 0);
            data.append('width', 200);
            data.append('height', 150);
            data.append('inspiration', inspiration.uuid);
            await projectServices.activeProject(inspiration.uuid);
            await projectServices.addedItemToWorkspace(data);
            localStorage.setItem('boardItem', inspiration.uuid)
            setGotoBoard(true);
        } else {
            setError('Please! select one board.');
        }
    }

    function handleChange(e) {
        const found = projectBoardName.find(x => x.uuid === e.target.value);
        if (found) {
            setSelectedProject(e.target.value);
            setSelectedValue(found.name);
            setError(null);
        }
        // projectServices.activeProject(e.target.value);
    }

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

    function handleInspiration(item) {
        setUpdateInspiration(item);
    }

    async function handleInspirationLike(inspiration) {
        let form = new FormData();
        setInspirationLike([...inspirationLike, { inspiration }])
        form.set('inspiration', inspiration.uuid);
        const token = localStorage.getItem('token');
        if (token) {
            await inspirationService.createInspirationLike(form);
        }
    }

    const { name, isOpen } = inspirationModal;

    let paginateInspiration = [];
    if (inspiration.results) {
        paginateInspiration = paginate(inspiration.results, currentPage, pageSize);
    }

    return (
        <div className='container'>
            <div className='cross-icon crossModal' onClick={closeModal}>
                <img src={require('../../Asset/Icons/cross.png')} alt="" />
            </div>
            <div className='container-fluid mb-5 bg-white'>
                <div className='container' >
                    {updateInspiration && <div className="row" key={updateInspiration.uuid}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-3">
                            <div className="image-fav-modal">
                                <img src={updateInspiration.ref_img} alt="" />
                                <span className='icon'>
                                    <i
                                        onClick={() => handleInspirationLike(updateInspiration)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${inspirationLike.some(el => el.inspiration.uuid === updateInspiration.uuid) ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 shop-modal-title">
                            {!token ? <div className='text-fav text-center'>
                                <h6>Designed by</h6>
                                <h6>Want to add this item to a moodboard ?</h6>
                                <GoBtn text="Sign Up" type='button' onClick={() => openShopModal('signup')} />
                            </div> :
                                <div className="text-fav text-center">
                                    <h6>{updateInspiration.designed_by}</h6>
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
                                                    {projectBoardName.map((item, i) =>
                                                        <option key={i} value={item.uuid}>{item.name}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li className="saveSection">
                                                <GoBtn text='Save' onClick={() => addToBoard(updateInspiration)} />
                                            </li>
                                            {error && <h6 className='board-error'>{error}</h6>}
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
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                                <img onClick={() => handleInspiration(item)} src={item.ref_img} alt="" />
                                                <h2>{item.retailer}</h2>
                                            </div>
                                        )}
                                        <Pagination
                                            itemsCount={inspiration.count}
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