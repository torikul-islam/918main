import React, { useState, useEffect } from 'react';
import './inspirationFilter.css';
import roomServices from '../../../services/roomServices';
import styleServices from '../../../services/styleServices';




const InspirationFilter = (props) => {
    const { closeModal, clickRoomItem, clickStyleItem, inspirationIds } = props
    const [openTab, setOpenTab] = useState('room');
    const [rooms, setRooms] = useState([]);
    const [style, setStyles] = useState([]);


    useEffect(() => {
        (async function () {
            const { data } = await styleServices.getAllStyle();
            setStyles(data);
        })()
    }, []);


    useEffect(() => {
        (async function () {
            const { data } = await roomServices.getAllRooms();
            // call the backend server and set response array in setProducts
            setRooms(data);
        })()
    }, []);


    function clickTab(name) {
        if (name === 'room') {
            setOpenTab('room');
        } else if (name === 'style') {
            setOpenTab('style');
        }
    }

    return (

        <div className='container'>
            <div className='inspired-fil'>
                <div className='cross-icon' onClick={closeModal}>
                    <img src={require('../../../Asset/Icons/cross.png')} alt="" />
                </div>
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <div className={`nav-link pointer ${openTab === 'room' ? 'active disable' : ''}`} data-toggle="tab" onClick={() => clickTab('room')}>Room</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link pointer ${openTab === 'style' ? 'active disable' : ''}`} data-toggle="tab" onClick={() => clickTab('style')}>Style</div>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="home" className={`container tab-pane ${openTab === 'room' ? 'active' : 'fade'}`}><br />
                            <ul className="list-category">
                                {rooms.results && rooms.results.map((item, i) =>
                                    <li className={inspirationIds.room_ids.some(id => id === item.pk) ? 'activebtn' : ' '} key={i}> <button onClick={() => clickRoomItem(item)}>{item.name}</button></li>
                                )}
                            </ul>
                        </div>
                        <div id="menu1" className={`container tab-pane ${openTab === 'style' ? 'active' : 'fade'}`}>
                            <br />
                            <ul className="list-category">
                                {style.results && style.results.map((item, i) =>
                                    <li className={inspirationIds.style_ids.some(id => id === item.pk) ? 'activebtn' : ' '} key={i}> <button onClick={() => clickStyleItem(item)}>{item.name}</button></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InspirationFilter;