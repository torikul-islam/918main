import React, { useState, useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import ItemContainer from './itemContainer/itemContainer';
import InspirationFilter from './inspirationFilter/inspirationFilter';
import projectService from '../../services/projectService';
import ShopFilter from './shopFilter/shopFilter';
import Modal from '../common/modal/modal';
import ShopModal from './shopModal';
import InspirationModal from './inspirationModal';
import WorkspaceContext from '../../context/workspaceContext';
import inspiredService from '../../services/inspiredService';
import './workspace.css';
import productService from '../../services/productService';
import { withRouter } from 'react-router-dom';



const Workspace = (props) => {
    const { addShoppingCard } = props;
    const token = localStorage.getItem('token');
    const [modal, setModal] = useState({ isOpen: false, name: null });
    const [inspirationFilter, setInspirationFilter] = useState({ room_ids: [], style_ids: [] })
    const [dragImage, setDragImage] = useState([]);

    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPieces, setSelectedPieces] = useState([]);
    const [priceRange, setPriceRange] = useState([]);

    const [projects, setProjects] = useState([]);
    const [gotoBoard, setGotoBoard] = useState(false);

    const [inspirationFilterId, setInspirationFilterId] = useState(null);
    const [productFilterId, setProductFilterId] = useState(null);

    const [inspirations, setInspirations] = useState({ count: null, next: null, previous: null, results: [] });
    const [products, setProducts] = useState({ count: null, next: null, previous: null, results: [] });

    const [modalItem, setModalItem] = useState({})



    // fetch all project
    useEffect(() => {
        (async function () {
            if (token) {
                let { data } = await projectService.getProject();
                if (data.length > 0) {
                    let findActive = data.find(a => a.is_active === true);
                    if (!findActive) {
                        findActive = { ...data[0], is_active: true };
                    }
                    data = data.filter((x, i, a) => (a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i) && findActive.name.toLowerCase() !== x.name.toLowerCase());
                    setProjects([{ ...findActive }, ...data]);
                }
            }
        }
        )()
    }, [token]);


    // fetch all inspiration
    useEffect(() => {
        (async function () {
            const { data } = await inspiredService.getAllInspired();
            // call the backend server and set response array in setProducts
            setInspirations(data);
        })()
    }, []);

    useEffect(() => {
        (async function () {
            // call the backend server and set response array in setProduct
            const { data } = await productService.getAllProducts()
            setProducts(data);
        })()
    }, []);

    async function handleChangeProjectBoards(e) {
        let activeChanged = [...projects];
        activeChanged.forEach(p => {
            if (p.uuid === e.target.value) {
                p.is_active = true
            } else {
                p.is_active = false;
            }
        });
        setProjects(activeChanged);
        await projectService.activeProject(e.target.value)
    }

    async function addedItemProjectBoards(item, type) {
        if (!type) return;
        const defaultProps = {
            x_percent: 0.5,
            y_percent: 0.5,
            z: 1,
            width: 200.0,
            height: 150.0
        };
        let form = new FormData();
        let oldBoards = [...projects];
        const idx = oldBoards.findIndex(b => b.is_active === true);
        if (type === 'product') {
            form.append('project', oldBoards[idx].uuid);
            form.append('x_percent', defaultProps.x_percent);
            form.append('y_percent', defaultProps.y_percent);
            form.append('z', defaultProps.z);
            form.append('width', defaultProps.width);
            form.append('height', defaultProps.height);
            form.append('product', item.uuid);

            const { data } = await projectService.addedItemToWorkspace(form);

            oldBoards[idx].workspace_items.push({ ...data, product: item, inspiration: null });

            setGotoBoard(true);

        } else if (type === 'inspiration') {
            form.append('project', oldBoards[idx].uuid);
            form.append('x_percent', defaultProps.x_percent);
            form.append('y_percent', defaultProps.y_percent);
            form.append('z', defaultProps.z);
            form.append('width', defaultProps.width);
            form.append('height', defaultProps.height);
            form.append('inspiration', item.uuid);

            const { data } = await projectService.addedItemToWorkspace(form);

            oldBoards[idx].workspace_items.push({ ...data, inspiration: item, product: null });

            setGotoBoard(true);
        }
        setProjects(oldBoards)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    function clickStyleItem(item) {
        let styleIds = inspirationFilter.style_ids;
        const found = styleIds.find(f => f.pk === Number(item.pk));
        if (found) {
            styleIds = styleIds.filter(x => x.pk !== Number(item.pk))
        } else {
            styleIds.push(item)
        }
        setInspirationFilterId(item.pk)
        setInspirationFilter({ style_ids: styleIds, room_ids: [...inspirationFilter.room_ids] })
    }

    function clickRoomItem(item) {
        let roomIds = inspirationFilter.room_ids;
        const found = roomIds.find(f => f.pk === Number(item.pk));
        if (found) {
            roomIds = roomIds.filter(x => x.pk !== Number(item.pk))
        } else {
            roomIds.push(item)
        }
        setInspirationFilterId(item.pk)
        setInspirationFilter({ room_ids: roomIds, style_ids: [...inspirationFilter.style_ids] })
    }


    function handleColors(color) {
        let colors = [...selectedColors];
        const found = colors.find(item => item.pk === Number(color.pk));
        if (found) {
            colors = colors.filter(c => c.pk !== Number(color.pk))
        } else {
            colors.push(color)
        }
        setProductFilterId(color.pk)
        setSelectedColors(colors);
    }


    function handlePieces(piece) {
        let pieces = [...selectedPieces];
        const found = pieces.find(item => item.pk === Number(piece.pk));
        if (found) {
            pieces = pieces.filter(c => c.pk !== Number(piece.pk))
        } else {
            pieces.push(piece)
        }
        setProductFilterId(piece.pk)
        setSelectedPieces(pieces);
    }

    function removePriceRange() {
        setPriceRange([])
    }

    function onChangeRange(range) {
        setProductFilterId(Math.random() * 10)
        setPriceRange(range)
    }


    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setGotoBoard(false);
        setModal({ isOpen: false, name: null })
    };

    function clickFilterImage(name, item) {
        setModalItem(item);
        setModal({ isOpen: true, name: name })
    }

    function addImageToDrag(item) {
        setDragImage([...dragImage, ...item]);
    }

    function onChangeSearch() { }

    const { name, isOpen } = modal;


    return (
        <WorkspaceContext.Provider value={{
            projects, setProjects, handleChangeProjectBoards, addedItemProjectBoards, gotoBoard, setGotoBoard,
            productFilterId, inspirations, setInspirations, modalItem, setModalItem, products, setProducts, inspirationFilterId
        }}>
            <>
                <NavbarB  {...props}
                    onChangeSearch={onChangeSearch}
                    searchData={[]} search={"null"} />
                <div className="container-fluid page-content">
                    <div className="row styleformobile">
                        <div className="col-md-4 col-sm-12">
                            <ItemContainer
                                clickFilterImage={clickFilterImage}
                                openModal={openModal}
                                inspirationFilter={{
                                    style_ids: inspirationFilter.style_ids.map(i => i.pk),
                                    room_ids: inspirationFilter.room_ids.map(i => i.pk)
                                }}
                                productFilter={{
                                    piece_ids: selectedPieces.map(x => x.pk),
                                    color_ids: selectedColors.map(c => c.pk),
                                    price_lower_bound: priceRange[0] ? [priceRange[0].substr(1).replace(',', '')] : [],
                                    price_upper_bound: priceRange[1] ? [priceRange[1].substr(1).replace(',', '')] : []
                                }}
                            />
                        </div>

                        <div className="col-md-8 col-sm-12">
                            <Board
                                addImageToDrag={addImageToDrag}
                                dragImage={dragImage}
                            />
                        </div>

                    </div>
                </div>

                {name === 'shop' && <Modal isOpen={isOpen} childComp={<ShopFilter
                    handlePieces={handlePieces}
                    handleColors={handleColors}
                    onChangeRange={onChangeRange}
                    removePriceRange={removePriceRange}
                    selectedColors={selectedColors}
                    selectedPieces={selectedPieces}
                    priceRange={priceRange}
                    openModal={openModal}
                    closeModal={closeModal} />} />}

                {name === 'shopImage' && <Modal isOpen={isOpen} childComp={<ShopModal {...props}
                    addShoppingCard={addShoppingCard}
                    openModal={openModal}
                    closeModal={closeModal}
                />}
                />}

                {name === 'inspiredImage' && <Modal isOpen={isOpen} childComp={<InspirationModal
                    {...props}
                    openModal={openModal}
                    closeModal={closeModal}
                />}
                />}
                {name === 'inspired' && <Modal isOpen={isOpen} childComp={<InspirationFilter
                    inspirationIds={inspirationFilter}
                    clickStyleItem={clickStyleItem}
                    clickRoomItem={clickRoomItem}
                    closeModal={closeModal}
                />}
                />}
            </>
        </WorkspaceContext.Provider>
    );
}


export default withRouter(Workspace);