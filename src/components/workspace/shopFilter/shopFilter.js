import React, { useState, useEffect, useRef } from 'react';
import './shopFilter.css';
import piecesServices from '../../../services/piecesService';
import colorServices from '../../../services/colorsService'
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import './rangeSlider.css';
import wNumb from 'wnumb';



function ShopFilter(props) {
    const { closeModal } = props;
    const [openTab, setOpenTab] = useState('furniture');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null)
    const [piecesCategory, setPiecesCategory] = useState([]);
    const [colors, setColors] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPieces, setSelectedPieces] = useState([]);
    const [priceRange, setPriceRange] = useState([]);



    useEffect(() => {
        (async function () {
            const { data } = await piecesServices.getAllPieceWithCategory();
            // call the backend server and set response array in setProducts
            setPiecesCategory(data);
            if (data.results.length > 0) {
                setSelectedCategoryId(data.results[0].uuid)
            }
        })()
    }, []);
    useEffect(() => {
        (async function () {
            const { data } = await colorServices.getAllColors();
            // call the backend server and set response array in setProducts
            setColors(data);

        })()
    }, []);

    function clickPiecesCategory(item) {
        setSelectedCategoryId(item.uuid)
    }
    function handleColors(color) {
        let colors = [...selectedColors];
        const found = colors.find(item => item.uuid === color.uuid);
        if (found) {
            colors = colors.filter(c => c.uuid !== color.uuid)
        } else {
            colors.push(color)
        }
        setSelectedColors(colors);
    }


    function handlePieces(piece) {
        let pieces = [...selectedPieces];
        const found = pieces.find(item => item.pk === piece.pk);
        if (found) {
            pieces = pieces.filter(c => c.pk !== piece.pk)
        } else {
            pieces.push(piece)
        }
        setSelectedPieces(pieces);
    }

    function removePriceRange() {
        setPriceRange([])
    }

    function onChange(range) {
        setPriceRange(range)
    }

    return (

        <div className='container'>
            <div className='shop-furniture'>
                <div className='cross-icon' onClick={closeModal}>
                    <img src={require('../../../Asset/Icons/cross.png')} alt="" />
                </div>
                <div className="list-furniture">
                    <div className="container">
                        <div className="row">
                            <div className="removeIcons float-left">
                                <ul>
                                    {selectedPieces.map((p, i) =>
                                        <li key={i}>
                                            <img onClick={() => handlePieces(p)}
                                                className="removeIcon pointer"
                                                src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
                                            {p.name}</li>
                                    )}
                                    {selectedColors.map((c, i) =>
                                        <li key={i}>
                                            <img onClick={() => handleColors(c)}
                                                className="removeIcon pointer"
                                                src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
                                            {c.name}
                                        </li>
                                    )}

                                    {priceRange.length > 1 && <li>
                                        <img
                                            onClick={() => removePriceRange(priceRange)}
                                            className="removeIcon pointer"
                                            src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
                                        {priceRange[0] + "-" + priceRange[1]}
                                    </li>}

                                    {/* <li>{removeIcon}Bedroom</li>
                                    <li>{removeIcon}Office</li>
                                    <li>{removeIcon}Kitchen</li>
                                    <li>{removeIcon}Black</li> */}
                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="productfurniture">
                                    <h5>Products</h5>
                                    <ul className="nav nav-pills" role="tablist">
                                        {piecesCategory.results && piecesCategory.results.map((item, i) =>
                                            <li
                                                onClick={() => clickPiecesCategory(item)}
                                                className={`nav-item pointer ${selectedCategoryId === item.uuid ? 'active disable' : ''}`}
                                                key={i}>{item.name}</li>
                                        )}

                                        {/* <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'furniture' ? 'active' : ''}`} data-toggle="pill" href="#furniture" onClick={() => clickTabs('furniture')}>Furniture</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'accessories' ? 'active' : ''}`} data-toggle="pill" href="#accessories" onClick={() => clickTabs('accessories')}>Accessories</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'lightings' ? 'active' : ''}`} data-toggle="pill" href="#lightings" onClick={() => clickTabs('lightings')}>Lightings</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'rugs' ? 'active' : ''}`} data-toggle="pill" href="#rugs" onClick={() => clickTabs('rugs')}>Rugs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'bed' ? 'active' : ''}`} data-toggle="pill" href="#bedbath" onClick={() => clickTabs('bed')}>Bed &amp; Bath</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'paint' ? 'active' : ''}`} data-toggle="pill" href="#paint" onClick={() => clickTabs('paint')}>Paint</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'outdoor' ? 'active' : ''}`} data-toggle="pill" href="#outdoor" onClick={() => clickTabs('outdoor')}>Outdoor</a>
                                        </li> */}
                                    </ul>

                                    <div className="tab-content">
                                        <ul className="list-categroy-shop">
                                            {piecesCategory.results && piecesCategory.results.filter(item => item.uuid === selectedCategoryId)
                                                .map(furniture => furniture.pieces.map((piece, idx) =>
                                                    <li className={`${selectedPieces.some(p => p.pk === piece.pk) ? 'active' : ' '}`} key={idx}> <button onClick={() => handlePieces(piece)}>{piece.name}</button></li>
                                                ))}
                                        </ul>


                                        {/* <div id="furniture" className={`tab-pane category-list ${openTab === 'furniture' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}

                                            </ul>
                                            <hr />
                                        </div>
                                        <div id="accessories" className={`tab-pane category-list ${openTab === 'accessories' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="lightings" className={`tab-pane category-list ${openTab === 'lightings' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="rugs" className={`tab-pane category-list ${openTab === 'rugs' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="bedbath" className={`tab-pane category-list ${openTab === 'bed' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="paint" className={`tab-pane category-list ${openTab === 'paint' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="outdoor" className={`tab-pane category-list ${openTab === 'outdoor' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {furnitures.results && furnitures.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="range-slider">
                                    <h5>Price</h5>
                                    <div className="rangeslider">
                                        <Nouislider
                                            range={{ min: 0, max: 20000 }}
                                            start={[priceRange[0] || 0, priceRange[1] || 500]}
                                            tooltips
                                            format={wNumb({
                                                thousand: ',',
                                                prefix: '$',
                                                decimals: 0
                                            })}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="colorStyle">
                                    <h5>Color</h5>
                                    <ul>
                                        {colors.results && colors.results.map((item, i) =>
                                            <li className={`${selectedColors.some(s => s.uuid === item.uuid) ? 'active' : ' '}`} onClick={() => handleColors(item)} style={{ background: `#${item.hex_value}` }} key={i}></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopFilter;