import React from 'react';
import './looks.css';


const LookPost = ({ product }) => {
    return (
        <div className='looks-post'>
            <div className='container'>
                <div className='row'>
                    {product && product.map((item, i) =>
                        <div className='col-sm-3' key={i}>
                            <img src={item.ref_img} alt="" />
                            <p>{item.retailer}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LookPost;