import React, { useState, useEffect, useRef } from 'react';
import projectService from '../../../services/projectService';
import Draggable from 'react-draggable';
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


    const [isDragging, setIsDragging] = useState(false);
    const [original, setOriginal] = useState({ originalX: 0, originalY: 0, })
    const [translate, setTranslate] = useState({ translateX: 0, translateY: 0, })
    const [lastTranslate, setLastTranslate] = useState({ lastTranslateX: 0, lastTranslateY: 0, })



    useEffect(() => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    });

    function handleMouseDown({ clientX, clientY }) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        if (props.onDragStart) {
            props.onDragStart();
        }

        setOriginal({ originalX: clientX, originalY: clientY, })
        setIsDragging(true)

        // this.setState({
        //     originalX: clientX,
        //     originalY: clientY,
        //     isDragging: true
        // });
    };


    function handleMouseMove({ clientX, clientY }) {
        // const { isDragging } = this.state;
        // const { onDrag } = this.props;

        if (!isDragging) {
            return;
        }

        setTranslate({
            translateX: clientX - original.originalX + lastTranslate.lastTranslateX,
            translateY: clientY - original.originalY + lastTranslate.lastTranslateY
        })
        if (props.ondrag) {
            props.onDrag({
                translateX: translate.translateX,
                translateY: translate.translateY
            });
        }

        // this.setState(prevState => ({
        //     translateX: clientX - prevState.originalX + prevState.lastTranslateX,
        //     translateY: clientY - prevState.originalY + prevState.lastTranslateY
        // }), () => {
        //     if (onDrag) {
        //         onDrag({
        //             translateX: this.state.translateX,
        //             translateY: this.state.translateY
        //         });
        //     }
        // });


    };

    function handleMouseUp() {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        setOriginal({
            originalX: 0,
            originalY: 0,
        })

        setLastTranslate({
            lastTranslateX: translate.translateX,
            lastTranslateY: translate.translateY,
        })
        setIsDragging(false)

        if (props.onDragEnd) {
            props.onDragEnd();
        }

        // this.setState({
        //     originalX: 0,
        //     originalY: 0,
        //     lastTranslateX: this.state.translateX,
        //     lastTranslateY: this.state.translateY,

        //     isDragging: false
        // },
        //     () => {
        //         if (this.props.onDragEnd) {
        //             this.props.onDragEnd();
        //         }
        //     }
        // );
    };


    let handleRef = useRef(null)
    let [dragStartLeft, setdragStartLeft] = useState(0)
    let [dragStartTop, setdragStartTop] = useState(0)
    let [dragStartX, setdragStartX] = useState(0)
    let [dragStartY, setdragStartY] = useState(0)
    // let [dragStartLeft, setdragStartLeft] = useState(0)




    function initialiseDrag(event) {
        const { target, clientX, clientY } = event;
        const { offsetTop, offsetLeft } = target;
        const { left, top } = handleRef.current.getBoundingClientRect();
        console.log('inint', handleRef);
        setdragStartLeft(left - offsetLeft)
        setdragStartTop(top - offsetTop)
        setdragStartX(clientX)
        setdragStartY(clientY)

        // this.dragStartLeft = left - offsetLeft;
        // this.dragStartTop = top - offsetTop;
        // this.dragStartX = clientX;
        // this.dragStartY = clientY;
        window.addEventListener('mousemove', startDragging, false);
        window.addEventListener('mouseup', stopDragging, false);
    }

    function startDragging({ clientX, clientY }) {
        document.getElementById("test").style.transform = `translate(${dragStartLeft + clientX - dragStartX}px, ${dragStartTop + clientY - dragStartY}px)`;
    }

    function stopDragging() {
        window.removeEventListener('mousemove', startDragging, false);
        window.removeEventListener('mouseup', stopDragging, false);
    }



    return (
        <div className="dragDrop">
            <div className="container board-tilte">
                <div className="boards-fiter">
                    <ul className="for-desktops">
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

                <div id="test" onMouseDown={initialiseDrag}
                    ref={handleRef}>
                    DragMe
                </div>

                {userProject.workspace_items && <div className="middle-body">
                    {userProject.workspace_items.length === 0 ?
                        <div className="textmiddle">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            <h4>Click on any image to add it</h4>
                        </div>
                        :
                        userProject.workspace_items.map((item, i) =>
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
                </div>}

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
    );
};



export default Board;