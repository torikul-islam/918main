import React, { useState, useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import productService from '../../services/productService';
import './bloghead.css';



const BlogHead = ({ data, product, openModal, openMenu, handleOpenMenu  })=> {
    return (
        <>
            <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal}/>
            <div div className="blog-area">
                <div className="container">
                    <div className="row">
                        {data.length > 0 && <div div className="col-md-8 c0l-sm-12 col-md-offset-2 pt-5 pb-5">
                            <div className="text-blog-title">
                                <h4>{data[0].title}</h4>
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
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                 */}
                                </div>
                            </div>}
                        </div>



                        <div className="col-sm-4">
                            <div className="heading-prodcut pb-3">
                                <h4>SHOP THIS ARTICLE</h4>
                            </div>
                            {product && product.map((item, i) =>

                                <div className="product-price">
                                    <img src={item.ref_img} alt="" />
                                    <h4>{item.retailer}</h4>
                                    <h5>${item.price}</h5>
                                </div>

                            )}
                            {/* <div className="product-price">
                                <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h4>Retailer</h4>
                                <h5>$554</h5>
                            </div>
                            <div className="product-price">
                                <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h4>Retailer</h4>
                                <h5>$554</h5>
                            </div>
                            <div className="product-price">
                                <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h4>Retailer</h4>
                                <h5>$554</h5>
                            </div>
                            <div className="product-price">
                                <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                                <h4>Retailer</h4>
                                <h5>$554</h5>
                            </div> */}
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}


export default BlogHead;
