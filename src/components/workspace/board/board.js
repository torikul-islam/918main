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
        if (Object.keys(item).length === 0) return;

        let originalProject = [...projects];
        const idx = originalProject.findIndex(p => p.is_active === true);

        if (idx !== -1) {
            originalProject[idx].workspace_items = originalProject[idx].workspace_items.filter(el => el.uuid !== item.uuid);
        }
        setProjects(originalProject);

        await projectService.workspaceItemDelete(item.uuid);
    }

    async function handleCopyItem(item) {
        if (Object.keys(item).length === 0) return;

        let originalProject = [...projects];
        let form = new FormData();
        const idx = originalProject.findIndex(b => b.is_active === true);

        if (item.product !== null) {
            form.append('project', originalProject[idx].uuid);
            form.append('x_percent', item.x_percent);
            form.append('y_percent', item.y_percent);
            form.append('z', item.z);
            form.append('width', item.width);
            form.append('height', item.height);
            form.append('product', item.product.uuid);
            const { data } = await projectService.addedItemToWorkspace(form)
            originalProject[idx].workspace_items.push({ ...data, product: item.product, inspiration: null })

        } else if (item.inspiration !== null) {
            form.append('project', originalProject[idx].uuid);
            form.append('x_percent', item.x_percent);
            form.append('y_percent', item.y_percent);
            form.append('z', item.z);
            form.append('width', item.width);
            form.append('height', item.height);
            form.append('inspiration', item.inspiration.uuid);
            const { data } = await projectService.addedItemToWorkspace(form)
            originalProject[idx].workspace_items.push({ ...data, product: null, inspiration: item.inspiration })
        }
        setProjects(originalProject)
    }

    async function handleZAxis(type, item) {
        if (Object.keys(item).length === 0) return;

        let originProject = [...projects];
        const index = originProject.findIndex(el => el.is_active === true);
        if (type === 'up') {
            originProject[index].workspace_items.find(x => x.uuid === item.uuid).z += 1;
        } else {
            if (originProject[index].workspace_items.find(x => x.uuid === item.uuid).z > 0) {
                originProject[index].workspace_items.find(x => x.uuid === item.uuid).z -= 1;
            } else return;
        }
        setProjects(originProject)

        const updateZIndex = {
            z: item.z,
            x_percent: item.x_percent,
            y_percent: item.y_percent

        }
        await projectService.updateWorkspaceItem(item.uuid, updateZIndex)
    }

    async function handleStop(e, data, item) {
        let originProject = [...projects];
        const index = originProject.findIndex(el => el.is_active === true);
        const updateValue = {
            z: item.z,
            x_percent: data.x,
            y_percent: data.y
        }

        originProject[index].workspace_items.filter(x => x.uuid === item.uuid).x_percent = data.x;
        originProject[index].workspace_items.filter(x => x.uuid === item.uuid).y_percent = data.y;

        setProjects(originProject)

        await projectService.updateWorkspaceItem(item.uuid, updateValue)
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
                                <Draggable key={i}
                                    bounds='parent'
                                    onStop={(e, data) => handleStop(e, data, item)}
                                    position={null}
                                    defaultPosition={{ x: item.x_percent, y: item.y_percent }}
                                >
                                    <div style={{ zIndex: item.z }} onTouchStart={(e) => handleBoardItem(e, item)}
                                        onClick={(e) => handleBoardItem(e, item)}
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