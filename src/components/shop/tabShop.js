import React, { Component } from 'react';
import './tabShop.css';


const TabShop = ({ onItemSelect, selectedItem, pieces, }) => {
    return (
        <div className="list-furniture">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Shop</h4>
                        <ul>
                            {pieces.map(item => <li
                                onClick={() => onItemSelect(item)}
                                className={item.id === selectedItem ? 'disable active' : 'pointer'}
                                key={item.uuid} >
                                {item.name.toUpperCase()}
                            </li>
                            )}
                            {/* <li>FURNITURE</li>
                            <li>DECOR</li>
                            <li>RUGS</li>
                            <li>BED &amp; BATH</li>
                            <li>LIGHTING</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabShop;
