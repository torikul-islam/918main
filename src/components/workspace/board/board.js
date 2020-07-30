import React from 'react';
import './board.css';

const Board = props => {
    return (
        <div className="dragDrop">
            <div className="container board-tilte">
                <div className="boards-fiter">
                    <ul>
                        <li><h4>Boards</h4></li>
                        <li><button className="filter">My Living Room</button></li>
                        <li className="float-right"><img src={require('../../../Asset/Images/upicon.png')} alt="upicon.png" /></li>
                    </ul>
                </div>
                <div className="middle-body"></div>
                
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