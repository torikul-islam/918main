import React from 'react';
import NavbarB from '../nav/navbarB';
import './lookHead.css';



const LookHead = (props) => {
    const { clickProductLike, productLike, product } = props;

    if (product) {
        const isLike = productLike.some(el => el.product.uuid === product.uuid);
        if (isLike) {
            product['is_like'] = true;
        } else {
            product['is_like'] = false
        }
    }

    return (
        <>
            <NavbarB {...props} />
            {product && <div className="look-head">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-look">
                                <h4>{product.name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-with-logo">
                                <img src={product.ref_img} alt="" />
                                <span className="favIcon">
                                    <i
                                        onClick={() => clickProductLike(product)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${product.is_like ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default LookHead;
