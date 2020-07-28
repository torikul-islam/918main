import React from 'react';
import GoBtn from '../common/goBtn';
import './products.css';



const ProductDetailsTitle = ({ addShoppingCard, product, productLike, clickProductLike }) => {
    if (product) {
        console.log("Porduct props", product);
        const isLike = productLike.some(el => el.product.uuid === product.uuid);
        if (isLike) {
            product['is_like'] = true;
        } else {
            product['is_like'] = false
        }
    }
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
                        <div className="text-fav text-center">
                            <h6>{product.retailer}</h6>
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
                                    <GoBtn text='Save' />
                                </li>
                            </ul>
                            <GoBtn text='Add to Shopping List' onClick={() => addShoppingCard(product)} />
                        </div>

                    </div>
                </div>}
            </div>
        </div>
    );
}

export default ProductDetailsTitle;