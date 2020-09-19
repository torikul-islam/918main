import React, { useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import capitalize from '../../utils/capitalize';
import { Link } from 'react-router-dom';
import './blogHead.css';
import SocialIcons from '../common/socialicons/socailicon';
import Subscribe from '../common/socialicons/subscribe';



const BlogHead = (props) => {
    let { resource, resourceLike, clickResourceLike, product, ...rest } = props;
    resource = resource.find(x => x.uuid === props.match.params.id)

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
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        {resource && <div className="col-md-8 col-sm-12 col-md-offset-2 pt-5 pb-5">
                            <div className="text-blog-title">
                                {resource && <h4 className="pointer" onClick={() => window.open(resource.ref_url, '_blank')}> {capitalize(resource.title)}</h4>}
                            </div>
                        </div>}
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            {resource && <div className="title-with-logo">
                                <img className="pointer" onClick={() => window.open(resource.ref_url, '_blank')} src={resource.ref_img} alt="" />
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
                                    <Link to={`/product-details/${item.uuid}`} className='remove-u-line'>
                                        <img src={item.ref_img} alt="" />
                                        <h4>{item.retailer}</h4>
                                    </Link>
                                    <h5>${item.price}</h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SocialIcons />
            <Subscribe />
        </>
    );
}


export default BlogHead;
