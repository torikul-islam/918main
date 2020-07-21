import React from 'react';
import inspiredSlide from '../../Asset/Images/inspired_slide_item.png';
import SaveBtn from '../common/learnButton'
import './inspirationTitle.css';
import GoBtn from '../common/goBtn';




function InspirationTitle({ inspired }) {
    return (
        <div className='container-fluid mb-5'>
            <div className='container' >
                {inspired.map(item =>
                    <div className="row" key={item.uuid}>
                        <div className="col-sm-4">
                            <div className="image-fav">
                                <img src={item.ref_img} alt="" />
                                <span className="icon">
                                    <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
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