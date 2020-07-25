import React from 'react';
import NavbarB from '../nav/navbarB';
import './blogHead.css';
import { Link } from 'react-router-dom';



const BlogHead = ({ resource, resourceLike, clickResourceLike, product, ...rest }) => {

    const Capitalize = (text) => {
        let lowercase = text.toLowerCase();
        if (typeof lowercase !== "string") return lowercase;
        return lowercase.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    if (resource) {
        const isLike = resourceLike.some(el => el.resource.uuid === resource.uuid);
        if (isLike) {
            resource['is_like'] = true;
        } else {
            resource['is_like'] = false
        }
    }

    return (
        <>
            <NavbarB {...rest} />
            <div div className="blog-area">
                <div className="container">
                    <div className="row">
                        {resource && <div div className="col-md-8 c0l-sm-12 col-md-offset-2 pt-5 pb-5">
                            <div className="text-blog-title">
                                <h4>{Capitalize(resource.title)}</h4>
                            </div>
                        </div>}
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            {resource && <div className="title-with-logo">
                                <img src={resource.ref_img} alt="" />
                                <span className="favIcon">
                                    <i
                                        onClick={() => clickResourceLike(resource)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${resource.is_like ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>
                                <div className="pt-5 paragraph">
                                    {resource.content}
                                </div>
                            </div>}
                        </div>
                        <div className="col-sm-3 s-t-a">
                            <div className="heading-prodcut pb-3">
                                <h4>SHOP THIS ARTICLE</h4>
                            </div>
                            {product && product.map((item, i) =>
                                <div className="product-price" key={i}>
                                    <Link to={`/product-details/${item.uuid}`}>
                                        <img src={item.ref_img} alt="" />
                                    </Link>
                                    <h4>{item.retailer}</h4>
                                    <h5>${item.price}</h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}


export default BlogHead;
