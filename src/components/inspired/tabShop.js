import React, { useState, useEffect } from 'react';
import './tabShop.css';



const TabShop = ({ title, rooms, styles, onSelectOption }) => {


    return (
        <div className="list-furniture">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>{title}</h4>
                        <ul>
                            <li className="form-group col-sm-2">
                                <select className="form-control" onChange={(e) => onSelectOption(e, 'rooms')}>
                                    <option value="">Room</option>
                                    {rooms.map((r, i) =>
                                        <option key={i} id={r.pk} value={r.pk}>{r.name}</option>
                                    )}

                                </select>
                            </li>

                            <li className="form-group col-sm-2">
                                <select className="form-control" id="styles" onChange={(e) => onSelectOption(e, 'styles')} >
                                    <option value="">Style</option>
                                    {styles.map((s, i) =>
                                        <option key={i} id={s.pk} value={s.pk}>{s.name}</option>
                                    )}

                                </select>
                            </li>
                            <li>COLOR PALETTES</li>
                            <li>LOOKS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabShop;