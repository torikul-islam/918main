import React from 'react';
import { Link } from 'react-router-dom';



const ShopPost = ({ data }) => {
    return (
        <section className="post-slide-main">
            <div className="container">
                <div className="row">
                    {data && data.map(item =>
                        <div className="col-sm-3" key={item.uuid}>
                            <div className="image-post-slide">
                                <Link to={`/product-details/${item.uuid}`} className='remove-u-line'>
                                    <img src={item.ref_img} alt="" />
                                    <h6>{item.retailer}</h6>
                                </Link>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>

    );
}

export default ShopPost;