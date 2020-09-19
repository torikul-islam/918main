import React, { useState, useEffect } from 'react';
import GoBtn from '../common/goBtn';
import projectService from '../../services/projectService';
import './products.css';



const ProductDetailsTitle = (props) => {
    const { addShoppingCard, product, productLike, clickProductLike, openModal, project } = props
    const [selectedValue, setSelectedValue] = useState(null);
    const [error, setError] = useState(null);
    const [gotoBoard, setGotoBoard] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);


    if (product) {
        const isLike = productLike.some(el => el.product.uuid === product.uuid);
        if (isLike) {
            product['is_like'] = true;
        } else {
            product['is_like'] = false
        }
    }
    useEffect(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }), [props.match.params.id]);

    useEffect(() => setGotoBoard(false), [product]);

    function addToBoard(product) {
        let data = new FormData();
        if (selectedValue) {
            data.append('project', project.find(p => p.is_active === true).uuid);
            data.append('x_percent', .5);
            data.append('y_percent', .5);
            data.append('z', 1);
            data.append('width', 200);
            data.append('height', 150);
            data.append('product', product.uuid);
            projectService.addedItemToWorkspace(data);
            setGotoBoard(true);
        } else {
            setError('Please! select one board.');
        }
    }
    function handleChange(e) {
        const found = project.find(x => x.uuid === e.target.value);
        if (found) {
            setSelectedProject(e.target.value);
            setSelectedValue(found.name);
            setError(null);
        }
        projectService.activeProject(e.target.value);
    }


    const token = localStorage.getItem('token');

    return (
        <div className='container-fluid mb-5 marginnine'>
            <div className='container' >
                {product.price && <div className="row" >
                    <div className="col-sm-6">
                        <div className="image-fav">
                            <img src={product.ref_img} alt="" />
                            <span className='icon'>
                                <i
                                    onClick={() => clickProductLike(product)}
                                    style={{ cursor: "pointer" }}
                                    className={`fa-2x ${product.is_like ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        {!token ? (<div className='text-fav text-center'>
                            <h6>{product.retailer}</h6>
                            <h4>{product.name}</h4>
                            <p>${product.price}</p>

                            <h6>Want to add this item to a moodboard ?</h6>
                            <GoBtn text="Sign Up" type='button' onClick={() => openModal('signup')} />
                        </div>)
                            : (
                                <div className="text-fav text-center">
                                    <h6>{product.retailer}</h6>
                                    <h4>{product.name}</h4>
                                    <p>${product.price}</p>
                                    {gotoBoard ? <ul className="menu-name">
                                        <li className="select_design">
                                            <select name="cars" id="cars">
                                                <option value=''>Saved to {selectedValue}</option>
                                            </select>
                                        </li>
                                        <li className="saveSection">
                                            <GoBtn text='Go to Board' onClick={() => props.history.push('/workspace')} />
                                        </li>
                                    </ul> :
                                        <ul className="menu-name">
                                            <li className="select_design">
                                                <select name="cars" id="cars" onChange={handleChange}>
                                                    <option value=''>Add to Board</option>
                                                    {project.map(item =>
                                                        <option key={item.uuid} value={item.uuid}>{item.name}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li className="saveSection">
                                                <GoBtn text='Save' onClick={() => addToBoard(product)} />
                                            </li>
                                            {error && <h6 className='board-error'>{error}</h6>}
                                        </ul>}
                                    <GoBtn text='Add to Shopping List' onClick={() => addShoppingCard(product)} />
                                </div>
                            )
                        }
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default ProductDetailsTitle;