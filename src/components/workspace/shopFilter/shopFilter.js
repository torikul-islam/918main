import React, { useState, useEffect } from 'react';
import RangeSlider from './rangeSlider';
import './shopFilter.css';
import piecesServices from '../../../services/piecesService';
import colorServices from '../../../services/colorsService'



function ShopFilter(props) {
    const { closeModal } = props;
    const [openTab, setOpenTab] = useState('furniture');
    const [furnitures, setFurnitures] = useState([]);
    const [colors, setColors] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await piecesServices.getAllPieces();
            // call the backend server and set response array in setProducts
            setFurnitures(data);
            console.log(data.results[0].piece_category.name)
        })()
    }, []);
    useEffect(() => {
        (async function () {
            const { data } = await colorServices.getAllColors();
            // call the backend server and set response array in setProducts
            setColors(data);
            
        })()
    }, []);
    function clickTabs(name) {
        if (name === 'furniture') {
            setOpenTab('furniture');
        } else if (name === 'accessories') {
            setOpenTab('accessories');
        } else if (name === 'lightings') {
            setOpenTab('lightings');
        } else if (name === 'rugs') {
            setOpenTab('rugs');
        } else if (name === 'bed') {
            setOpenTab('bed');
        } else if (name === 'paint') {
            setOpenTab('paint');
        } else if (name === 'outdoor') {
            setOpenTab('outdoor');
        }
    }



    const removeIcon = <img className="removeIcon" src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
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
                                    <li>{removeIcon}Bedroom</li>
                                    <li>{removeIcon}Office</li>
                                    <li>{removeIcon}Kitchen</li>
                                    <li>{removeIcon}Black</li>
                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="productfurniture">
                                    <h5>Products</h5>
                                    <ul className="nav nav-pills" role="tablist">
                                        <li className="nav-item">
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
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="furniture" className={`tab-pane category-list ${openTab === 'furniture' ? 'active' : 'fade'}`}><br />
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="range-slider">
                                    <h5>Price</h5>
                                    <RangeSlider />
                                </div>
                                <hr />
                                <div className="colorStyle">
                                    <h5>Color</h5>
                                    <ul>
                                        {colors.results && colors.results.map((item, i) =>
                                            <li>{item.hex_value}</li>
                                        )}
                                        {/* <li className="red"></li>
                                        <li className="green"></li>
                                        <li className="yellow"></li>
                                        <li className="green"></li>
                                        <li className="blue"></li>
                                        <li className="purple"></li>
                                        <li className="pink"></li>
                                        <li className="black"></li>
                                        <li className="brown"></li>
                                        <li className="grey"></li>
                                        <li className="offwhite"></li>
                                        <li className="white"></li>
                                        <li className="golden"></li>
                                        <li className="silver"></li> */}
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