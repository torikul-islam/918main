import React, { useState, useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import Board from './board/board';
import ItemContainer from './itemContainer/itemContainer';
import InspirationFilter from './inspirationFilter/inspirationFilter';
import projectService from '../../services/projectService';
import ShopFilter from './shopFilter/shopFilter';
import Modal from '../common/modal/modal';
import ShopModal from './shopModal';
import './workspace.css';
import InspirationModal from './inspirationModal';



const Workspace = (props) => {
    const [modal, setModal] = useState({ isOpen: false, name: null });
    const [product, setProduct] = useState({});
    const [projectProduct, setProjectProduct] = useState({});
    const [inspirationFilter, setInspirationFilter] = useState({ room_ids: [], style_ids: [] })
    const [dragImage, setDragImage] = useState([]);

    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPieces, setSelectedPieces] = useState([]);
    const [priceRange, setPriceRange] = useState([]);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        (async function () {
            // call the backend server and set response array in setProduct
            setProduct([]);
        })()
    }, []);


    useEffect(() => {
        const token = localStorage.getItem('token');
        (async function () {
            if (token) {
                const { data } = await projectService.getUserProjectProduct();
                // call the backend server and set response array in setProducts
                setProjectProduct(data);
            }
        })()
    }, []);


    function clickStyleItem(item) {
        let styleIds = inspirationFilter.style_ids;
        const found = styleIds.find(f => f.pk === Number(item.pk));
        if (found) {
            styleIds = styleIds.filter(x => x.pk !== Number(item.pk))
        } else {
            styleIds.push(item)
        }
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
        setSelectedPieces(pieces);
    }

    function removePriceRange() {
        setPriceRange([])
    }

    function onChangeRange(range) {
        setPriceRange(range)
    }


    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };

    function clickFilterImage(name, item) {
        setModal({ isOpen: true, name: name })
        setProduct(item)
    }

    function addImageToDrag(item) {
        setDragImage([...dragImage, ...item]);
    }

    function onChangeSearch() { }

    const { name, isOpen } = modal;

    return (
        <>
            <NavbarB  {...props}
                onChangeSearch={onChangeSearch}
                searchData={[]} search={"null"} />
            <div className="container-fluid page-content">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <ItemContainer
                            projectProduct={projectProduct}
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
                product={product}
                openModal={openModal}
                closeModal={closeModal}

            />}
            />}

            {name === 'inspiredImage' && <Modal isOpen={isOpen} childComp={<InspirationModal
                {...props}
                inspirationItem={product}
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
    );
}


export default Workspace;