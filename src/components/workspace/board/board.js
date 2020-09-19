import React, { useState, useEffect, useContext } from 'react';
import projectService from '../../../services/projectService';
import Draggable from 'react-draggable';
import WorkspaceContext from '../../../context/workspaceContext';
import './board.css';



const Board = () => {
    const [selectedBoardItem, setSelectedBoardItem] = useState({});
    const { projects, setProjects, handleChangeProjectBoards } = useContext(WorkspaceContext);



    function handleBoardItem(e, item) {
        e.preventDefault();
        setSelectedBoardItem(item);
    }

    async function handleDeleteItem(item) {
        console.log('item', item);
        let originalProject = [...projects];
        const idx = originalProject.findIndex(p => p.is_active === true);
        if (idx !== -1) {
            let element = originalProject[idx].workspace_items;
            element = element.filter(el => el.uuid !== item.uuid);
        }
        setProjects(originalProject)
        await projectService.workspaceItemDelete(item.uuid);
    }

    function handleCopyItem(item) {
        let originalProject = [...projects];
        const idx = originalProject.findIndex(p => p.is_active === true);

        if (idx !== -1) {
            let element = originalProject[idx].workspace_items;
            element.push({ ...item, uuid: element.length });
        }
        setProjects(originalProject)
    }

    function handleZAxis(type, item) {
        let originProject = [...projects];
        const index = originProject.findIndex(el => el.is_active === true);
        if (type === 'up') {
            originProject[index].workspace_items.find(x => x.uuid === item.uuid).z += 1;
        } else {
            originProject[index].workspace_items.find(x => x.uuid === item.uuid).z -= 1;
        }
        setProjects(originProject)
    }


    return (
        <div className="dragDrop">
            <div className="container board-tilte">
                <div className="boards-fiter">
                    <ul className="for-desktops">
                        <li><h4>Boards</h4></li>
                        {projects.length > 0 && <select onChange={handleChangeProjectBoards} value={projects.find(x => x.is_active === true).uuid}>
                            {projects.map((item, i) =>
                                <option key={i} value={item.uuid}>{item.name}</option>
                            )}
                        </select>}
                    </ul>
                </div>
                {projects.filter(p => (p.is_active === true)).map((item, i) =>
                    <div className="middle-body" key={i}>
                        {item.workspace_items.length === 0 ?
                            <div className="textmiddle">
                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                <h4>Click on any image to add it</h4>
                            </div>
                            :
                            item.workspace_items.map((item, i) =>
                                <Draggable key={i} bounds='parent'>
                                    <div onTouchStart={(e) => handleBoardItem(e, item)} onClick={(e) => handleBoardItem(e, item)} style={{ left: item.x_percent, top: item.y_percent, zIndex: item.z }}
                                        className={`box boxoverlay ${selectedBoardItem.uuid === item.uuid ? "select-board-item" : ' '}`}>
                                        <div>
                                            <img style={{ width: item.width, height: item.height }}
                                                src={(item.product && item.product.ref_img) || (item.inspiration && item.inspiration.ref_img)} alt="" />
                                        </div>
                                    </div>
                                </Draggable>
                            )}
                    </div>
                )}
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
                <button type="button">Designer Help</button>
            </div>
        </div>
    );
};


export default Board;