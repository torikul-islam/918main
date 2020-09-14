import React, { useState, useEffect } from 'react';
import projectService from '../../../services/projectService';
import Draggable from 'react-draggable';
import './board.css';




const Board = (props) => {
    const { dragImage, addImageToDrag } = props;
    const [selectedBoardItem, setSelectedBoardItem] = useState({});
    const [userProject, setUserProject] = useState({});
    const isBoardItemAdded = localStorage.getItem('boardItem');

    useEffect(() => {
        const token = localStorage.getItem('token');
        (async function () {
            if (token) {
                let { data } = await projectService.getUserProjectProduct();
                // call the backend server and set response array in setProducts
                setUserProject(data);
            }
        })()
    }, [isBoardItemAdded]);


    function handleBoardItem(item) {
        setSelectedBoardItem(item)
    }

    return (
        <div className="dragDrop">
            <div className="container board-tilte">
                <div className="boards-fiter">
                    <ul>
                        <li><h4>Boards</h4></li>
                        <li><button className="filter">{userProject.name}</button></li>
                        <li className="float-right">
                            <img src={require('../../../Asset/Images/upicon.png')} alt="upicon.png" />
                        </li>
                    </ul>
                </div>
                <div className="middle-body">
                    {userProject.workspace_items && userProject.workspace_items.map((item, i) =>
                        <Draggable key={i} bounds='parent'>
                            <div onClick={() => handleBoardItem(item)} style={{ left: item.x_percent, top: item.y_percent, zIndex: item.z }}
                                className={`box boxoverlay ${selectedBoardItem.uuid === item.uuid ? "select-board-item" : ' '}`}>
                                <img style={{ width: item.width, height: item.height }}
                                    src={(item.product && item.product.ref_img) || (item.inspiration && item.inspiration.ref_img)} alt="" />
                            </div>
                        </Draggable>
                    )}
                </div>

            </div>
            <div className="bottom-icons">
                <ul>
                    <li><img src={require('../../../Asset/Images/copypast.png')} alt="copypast.png" /></li>
                    <li><img src={require('../../../Asset/Images/delete.png')} alt="delete.png" /></li>
                    <li><img src={require('../../../Asset/Images/uparrwo.png')} alt="uparrwo.png" /></li>
                    <li><img src={require('../../../Asset/Images/downarrow.png')} alt="downarrow.png" /></li>
                </ul>
            </div>
        </div>
    );
};



export default Board;