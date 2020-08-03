import React from 'react';
import './tabShop.css';


const TabShop = ({ onItemSelect, selectedItem, pieces, }) => {
    return (
        <div className="list-furniture shopHead">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Shop</h4>
                        <ul>
                            {pieces.map(item => <li
                                onClick={() => onItemSelect(item)}
                                className={item.name === selectedItem ? 'disable active' : 'pointer'}
                                key={item.uuid} >
                                {item.name.toUpperCase()}
                            </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabShop;
