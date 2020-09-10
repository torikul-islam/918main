import React, { useState, useEffect } from 'react';
import RangeSlider from './rangeSlider';
import './shopFilter.css';
import roomServices from '../../../services/roomServices';


function ShopFilter(props) {
    const { closeModal } = props;
    const [openTab, setOpenTab] = useState('furniture')
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        (async function () {
            const { data } = await roomServices.getAllRooms();
            // call the backend server and set response array in setProducts
            setRooms(data);
        })()
    }, []);
    function clickTabs(name) {
        if (name === 'furniture') {
            setOpenTab('furniture');
        } else if (name === 'decor') {
            setOpenTab('decor');
        } else if (name === 'rugs') {
            setOpenTab('rugs');
        } else if (name === 'bed') {
            setOpenTab('bed');
        } else if (name === 'lightings') {
            setOpenTab('lightings');
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
                                            <a className={`nav-link ${openTab === 'furniture' ? 'active' : ''}`} data-toggle="pill" href="#furniture" onClick={() => clickTabs('furniture')}>FURNITURE</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'decor' ? 'active' : ''}`} data-toggle="pill" href="#decor" onClick={() => clickTabs('decor')}>DECOR</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'rugs' ? 'active' : ''}`} data-toggle="pill" href="#rugs" onClick={() => clickTabs('rugs')}>RUGS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'bed' ? 'active' : ''}`} data-toggle="pill" href="#bedbath" onClick={() => clickTabs('bed')}>BED &amp; BATH</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${openTab === 'lightings' ? 'active' : ''}`} data-toggle="pill" href="#lightings" onClick={() => clickTabs('lightings')}>LIGHTING</a>
                                        </li>
                                    </ul>
                                    
                                    <div className="tab-content">
                                        <div id="furniture" className={`tab-pane category-list ${openTab === 'furniture' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {rooms.results && rooms.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}

                                            </ul>
                                            <hr />
                                        </div>
                                        <div id="decor" className={`tab-pane category-list ${openTab === 'decor' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {rooms.results && rooms.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="rugs" className={`tab-pane category-list ${openTab === 'rugs' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {rooms.results && rooms.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="bedbath" className={`tab-pane category-list ${openTab === 'bed' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {rooms.results && rooms.results.map((item, i) =>
                                                    <li> <button>{item.name}</button></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div id="lightings" className={`tab-pane category-list ${openTab === 'lightings' ? 'active' : 'fade'}`}><br />
                                            <ul className="list-categroy-shop">
                                                {rooms.results && rooms.results.map((item, i) =>
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
                                        <li className="red"></li>
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
                                        <li className="silver"></li>
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