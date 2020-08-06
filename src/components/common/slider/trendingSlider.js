import React from 'react';
import './slider.css';
import { Link } from 'react-router-dom';


const TrendingSlider = ({ data }) => {

    return (
        <>
            {data && data.map(item =>
                <div className="col-lg-3 col-md-3 col-sm-12" key={item.uuid}>
                    <div className="image-slide">
                        <Link to={`/inspired-details/${item.uuid}/${item.rooms[0]}`} className='remove-u-line'>
                            <div>
                                <img src={item.ref_img} alt="" />
                            </div>
                            <div>
                                <h6>{item.designed_by}</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default TrendingSlider;