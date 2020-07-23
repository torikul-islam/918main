import React from 'react';
import GoBtn from '../common/goBtn';
import './products.css';



const ProductDetailsTitle = ({ addShoppingCard, product }) => {

    return (
        <div className='container-fluid mb-5'>
            <div className='container' >
                {product && <div className="row" >
                    <div className="col-sm-4">
                        <div className="image-fav">
                            <img src={product.ref_img} alt="" />
                            <span className="icon">
                                <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="text-fav text-center">
                            <span>Product name</span>
                            <h4>{product.name}</h4>
                            <p>${product.price}</p>
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
                            <GoBtn text='Add to shopping List' onClick={() => addShoppingCard(product)} />
                        </div>

                    </div>
                </div>}
            </div>
        </div>
    );
}

export default ProductDetailsTitle;