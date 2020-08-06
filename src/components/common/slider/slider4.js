import React from 'react';
import './slider.css';
import { Link } from 'react-router-dom';


const Slider4 = ({ data }) => {

    return (
        <>
            {data && data.map(item =>
                <div className="col-lg-3 col-md-3 col-sm-12" key={item.uuid}>
                    <div className="image-slide-slider4" >
                        <Link to={`/product-details/${item.uuid}`} className='remove-u-line'>
                            <div>
                                <img src={item.ref_img} alt="" />
                            </div>
                            <div>
                                <h6> {item.retailer || item.designed_by}</h6>
                            </div>
                        </Link>
                        {item.price && <p>${item.price}</p>}
                    </div>
                </div>
            )}
        </>
    );
}

export default Slider4;