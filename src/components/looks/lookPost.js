import React from 'react';
import './looks.css';
import { Link } from 'react-router-dom';


const LookPost = ({ product }) => {
    return (
        <div className='looks-post'>
            <div className='container'>
                <div className='row look-slider'>
                    {product && product.map((item, i) =>
                        <div className='col-sm-3' key={i}>
                            <Link to={`/product-details/${item.uuid}`} className='remove-u-line'>
                                <img src={item.ref_img} alt="" />
                                <h5>{item.retailer}</h5>
                            </Link>
                            <h6>${item.price}</h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LookPost;