import React from 'react';
import GoBtn from '../common/goBtn';
import './inspirationTitle.css';




function InspirationTitle({ inspired, inspirationLike, clickInspirationLike }) {

    if (inspired.length > 0) {
        const isLike = inspirationLike.some(el => el.inspiration.uuid === inspired[0].uuid);
        if (isLike) {
            inspired[0]['is_like'] = true;
        } else {
            inspired[0]['is_like'] = false
        }
    }

    return (
        <div className='container-fluid mb-5'>
            <div className='container' >
                {inspired.map(item =>
                    <div className="row" key={item.uuid}>
                        <div className="col-sm-4">
                            <div className="image-fav">
                                <img src={item.ref_img} alt="" />
                                <span className='icon' >
                                    <i
                                        onClick={() => clickInspirationLike(item)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${item.is_like ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="text-fav text-center">
                                <span>Designed by </span>
                                <h4>{item.designed_by}</h4>
                                <ul className="menu-name">
                                    <li className="select_design"><select name="cars" id="cars">
                                        <option value="Add to Board">Add to Board</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select></li>
                                    <li className="saveSection">
                                        <GoBtn text='save' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default InspirationTitle;