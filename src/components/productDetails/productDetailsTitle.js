import React, { useState } from 'react';
import GoBtn from '../common/goBtn';
import projectService from '../../services/projectService';
import './products.css';



const ProductDetailsTitle = ({ addShoppingCard, product, productLike, clickProductLike, openModal, project }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    if (product) {
        const isLike = productLike.some(el => el.product.uuid === product.uuid);
        if (isLike) {
            product['is_like'] = true;
        } else {
            product['is_like'] = false
        }
    }

    function addToBoard(product) {
        let data = new FormData();
        if (selectedValue) {
            data.append('name', selectedValue);
            data.append('room', product.piece.rooms[0]);
            data.append('styles', product.piece.piece_category);
            data.append('budget', product.price);
            data.append('inspirations', 4);
            data.append('pieces', product.piece.id);

        }
        projectService.createProject(data);
    }
    function handleChange(event) {
        setSelectedValue(event.target.value)
    }


    const token = localStorage.getItem('token');

    return (
        <div className='container-fluid mb-5'>
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
                                    <ul className="menu-name">
                                        <li className="select_design">
                                            <select name="cars" id="cars" onChange={handleChange}>
                                                <option value=''>Add to Board</option>
                                                {project.map(item =>
                                                    <option key={item.uuid} value={item.name}>{item.name}</option>
                                                )}
                                                {/* <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option> */}
                                            </select>
                                        </li>
                                        <li className="saveSection">
                                            <GoBtn text='Save' onClick={() => addToBoard(product)} />
                                        </li>
                                    </ul>
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