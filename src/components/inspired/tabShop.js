import React from 'react';
import './tabShop.css';



const TabShop = ({ title, rooms, styles, onSelectOption }) => {


    return (
        <div className="list-furniture">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>{title}</h4>
                        <ul>
                            <li className="form-group col-md-2 col-5 marginFlex">
                                <select className="form-control" onChange={(e) => onSelectOption(e, 'rooms')}>
                                    <option value="">ROOM</option>
                                    {rooms.map((r, i) =>
                                        <option key={i} id={r.pk} value={r.pk}>{r.name.toUpperCase()}</option>
                                    )}

                                </select>
                            </li>

                            <li className="form-group col-md-2 col-5 marginFlex">
                                <select className="form-control" id="styles" onChange={(e) => onSelectOption(e, 'styles')} >
                                    <option value="">STYLE</option>
                                    {styles.map((s, i) =>
                                        <option key={i} id={s.pk} value={s.pk}>{s.name.toUpperCase()}</option>
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