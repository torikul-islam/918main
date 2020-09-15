import React, { useState, useEffect } from 'react';
import projectService from '../../../services/projectService';
import Draggable, { DraggableCore } from 'react-draggable';
import './board.css';




const Board = (props) => {
    const { dragImage, addImageToDrag } = props;
    const token = localStorage.getItem('token');
    const [selectedBoardItem, setSelectedBoardItem] = useState({});
    const [userProject, setUserProject] = useState({});
    const [projectBoardName, setProjectBoardName] = useState([]);
    const isBoardItemAdded = localStorage.getItem('boardItem');
    const [activeBoard, setActiveBoard] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        (async function () {
            if (token) {
                let { data } = await projectService.getUserProjectProduct();
                // call the backend server and set response array in setProducts
                setUserProject(data);
            }
        })()
    }, [isBoardItemAdded, activeBoard]);


    function handleBoardItem(item) {
        console.log('image clicked');
        setSelectedBoardItem(item);

    }

    useEffect(() => {
        (async function () {
            if (token) {
                let { data } = await projectService.getAllProjectName();
                let board = localStorage.getItem('boardName');
                if (board) {
                    data = [...data, { name: board }]
                }
                data = data.filter((x, i, a) => a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i);
                setProjectBoardName(data);
            }
        }
        )()
    }, [token]);


    function handleChangeBoardName(e) {
        projectService.activeProject(e.target.value);
        setActiveBoard(e.target.value);
    }

    async function handleDeleteItem(item) {
        let originalProject = { ...userProject }
        originalProject.workspace_items = originalProject.workspace_items.filter(el => el.uuid !== item.uuid);
        setUserProject(originalProject)
        await projectService.workspaceItemDelete(item.uuid);
    }

    function handleCopyItem(item) {
        let originalProject = { ...userProject };
        originalProject.workspace_items = [...originalProject.workspace_items, { ...item, uuid: originalProject.workspace_items.length }];
        setUserProject(originalProject)
    }

    function handleZAxis(type, item) {
        let originProject = { ...userProject };
        const index = originProject.workspace_items.findIndex(el => el.uuid === item.uuid);
        if (type === 'up') {
            originProject.workspace_items[index].z += 1;
        } else {
            originProject.workspace_items[index].z -= 1;
        }
        setUserProject(originProject)
    }


    return (
        <>
            <div className="dragDrop">
                <div className="container board-tilte">
                    <div className="boards-fiter">

                        <ul className="for-desktop">
                            <li><h4>Boards</h4></li>
                            <select onChange={handleChangeBoardName}>
                                {projectBoardName.map((item, i) =>
                                    <option key={i} value={item.uuid}>{item.name}</option>
                                )}
                            </select>
                            {/* <li className="float-right">
                            <img src={require('../../../Asset/Images/upicon.png')} alt="upicon.png" />
                        </li> */}
                        </ul>
                    </div>
                    <div className="middle-body">
                        <div className="textmiddle">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            <h4>Click on any image to add it</h4>
                        </div>
                        {userProject.workspace_items && userProject.workspace_items.map((item, i) =>
                            <Draggable key={i}>
                                <div onClick={() => handleBoardItem(item)} style={{ left: item.x_percent, top: item.y_percent, zIndex: item.z }}
                                    className={`box boxoverlay ${selectedBoardItem.uuid === item.uuid ? "select-board-item" : ' '}`}>
                                    <div>
                                        <img style={{ width: item.width, height: item.height }}
                                            src={(item.product && item.product.ref_img) || (item.inspiration && item.inspiration.ref_img)} alt="" />

                                    </div>
                                </div>
                            </Draggable>
                        )}
                    </div>

                </div>
                <div className="bottom-icons">
                    <ul>
                        <li data-toggle="tooltip" data-placement="top" title="Copy workspace item"><img onClick={() => handleCopyItem(selectedBoardItem)} src={require('../../../Asset/Images/copypast.png')} alt="copypast.png" /></li>
                        <li data-toggle="tooltip" data-placement="top" title="Delete item from workspace"><img onClick={() => handleDeleteItem(selectedBoardItem)} src={require('../../../Asset/Images/delete.png')} alt="delete.png" /></li>
                        <li data-toggle="tooltip" data-placement="top" title="Move forward (in front of other item z-axis)" ><img onClick={() => handleZAxis('up', selectedBoardItem)} src={require('../../../Asset/Images/uparrwo.png')} alt="uparrwo.png" /></li>
                        <li data-toggle="tooltip" data-placement="top" title="Move backward (behind other items z-axis)"><img onClick={() => handleZAxis('down', selectedBoardItem)} src={require('../../../Asset/Images/downarrow.png')} alt="downarrow.png" /></li>
                    </ul>
                </div>
                <div className="designerHelp">
                    <button type="button">Desinger Help</button>
                </div>

            </div>
            <ul className="for-mobile">
                <li><h4>Boards</h4></li>
                <select onChange={handleChangeBoardName}>
                    {projectBoardName.map((item, i) =>
                        <option key={i} value={item.uuid}>{item.name}</option>
                    )}
                </select>
                {/* <li className="float-right">
                            <img src={require('../../../Asset/Images/upicon.png')} alt="upicon.png" />
                        </li> */}
            </ul>
        </>
    );
};



export default Board;