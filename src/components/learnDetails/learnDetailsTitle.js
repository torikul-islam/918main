import React, { useState, useEffect } from 'react';
import GoBtn from '../common/goBtn';




const LearnDetailsTitle = ({ resource, resourceLike, clickResourceLike }) => {
    if (resource) {
        const isLike = resourceLike.some(el => el.resource.uuid === resource.uuid);
        if (isLike) {
            resource['is_like'] = true;
        } else {
            resource['is_like'] = false
        }
    }
    return (
        <div className='container-fluid mb-5'>
            <div className='container' >
                {resource.title && <div className="row" >
                    <div className="col-sm-4">
                        <div className="image-fav">
                            <img src={resource.ref_img} alt="" />
                            <span className='icon'>
                                <i
                                    onClick={() => clickResourceLike(resource)}
                                    style={{ cursor: "pointer" }}
                                    className={`fa-2x ${resource.is_like ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="text-fav text-center">
                            <h4>{resource.title}</h4>
                            <p>{resource.source}</p>
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
                </div>}
            </div>
        </div>
    );
}

export default LearnDetailsTitle;


