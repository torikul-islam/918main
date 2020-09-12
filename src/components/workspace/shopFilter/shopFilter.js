import React, { useState, useEffect, useRef } from 'react';
import './shopFilter.css';
import piecesServices from '../../../services/piecesService';
import colorServices from '../../../services/colorsService'
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import './rangeSlider.css';
import wNumb from 'wnumb';



function ShopFilter(props) {
    const { closeModal, selectedPieces, priceRange, removePriceRange,
        selectedColors, onChangeRange, handleColors, handlePieces } = props;
    const [selectedCategoryId, setSelectedCategoryId] = useState(null)
    const [piecesCategory, setPiecesCategory] = useState([]);
    const [colors, setColors] = useState([]);




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
                                    {selectedPieces && selectedPieces.map((p, i) =>
                                        <li key={i}>
                                            <img onClick={() => handlePieces(p)}
                                                className="removeIcon pointer"
                                                src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
                                            {p.name}</li>
                                    )}
                                    {selectedColors && selectedColors.map((c, i) =>
                                        <li key={i}>
                                            <img onClick={() => handleColors(c)}
                                                className="removeIcon pointer"
                                                src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
                                            {c.name}
                                        </li>
                                    )}

                                    {priceRange && priceRange.length > 1 && <li>
                                        <img
                                            onClick={() => removePriceRange(priceRange)}
                                            className="removeIcon pointer"
                                            src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
                                        {priceRange[0] + " - " + priceRange[1]}
                                    </li>}
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
                                    </ul>

                                    <div className="tab-content">
                                        <ul className="list-categroy-shop">
                                            {piecesCategory.results && piecesCategory.results.filter(item => item.uuid === selectedCategoryId)
                                                .map(furniture => furniture.pieces.map((piece, idx) =>
                                                    <li className={`${selectedPieces.some(p => p.pk === piece.pk) ? 'activebtn' : ' '}`} key={idx}> <button onClick={() => handlePieces(piece)}>{piece.name}</button></li>
                                                ))}
                                        </ul>
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
                                            onChange={onChangeRange}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="colorStyle">
                                    <h5>Color</h5>
                                    <ul>
                                        {colors.results && colors.results.map((item, i) =>
                                            <li className={`${selectedColors.some(s => s.uuid === item.uuid) ? 'activecolor' : ' '}`} onClick={() => handleColors(item)} style={{ background: `#${item.hex_value}` }} key={i}></li>
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