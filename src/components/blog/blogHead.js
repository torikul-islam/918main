import React from 'react';
import NavbarB from '../nav/navbarB';
import './blogHead.css';



const BlogHead = ({ data, product, ...rest }) => {
    const Capitalize = (text) => {
        let lowercase = text.toLowerCase();
        if (typeof lowercase !== "string") return lowercase;
        return lowercase.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    return (
        <>
            <NavbarB {...rest} />
            <div div className="blog-area">
                <div className="container">
                    <div className="row">
                        {data.length > 0 && <div div className="col-md-8 c0l-sm-12 col-md-offset-2 pt-5 pb-5">
                            <div className="text-blog-title">
                                <h4>{Capitalize(data[0].title)}</h4>
                            </div>
                        </div>}
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            {data.length > 0 && <div className="title-with-logo">
                                <img src={data[0].ref_img} alt="" />
                                <span className="favIcon">
                                    <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
                                </span>
                                <div className="pt-5 paragraph">
                                    {data[0].content}

                                </div>
                            </div>}
                        </div>
                        <div className="col-sm-4">
                            <div className="heading-prodcut pb-3">
                                <h4>SHOP THIS ARTICLE</h4>
                            </div>
                            {product && product.map((item, i) =>
                                <div className="product-price" key={i}>
                                    <img src={item.ref_img} alt="" />
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
