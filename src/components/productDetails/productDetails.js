import React, { useEffect, useState } from 'react';
import NavbarB from '../nav/navbarB';
import ProductDetailsTitle from './productDetailsTitle';
import ProductDetailsSlider from './postDetailsSlider';
import ProductDetailsSliderPost from './productDetailsSliderPost';
import productServices from '../../services/productService';





function ProductDetails(props) {
    const [product, setProduct] = useState({});


    useEffect(() => {
        (async function () {
            const { data } = await productServices.getProductById(props.match.params.id);
            setProduct(data);
        })()
    }, [props.match.params.id]);

    return (
        <>
            <NavbarB  {...props} />
            <ProductDetailsTitle addShoppingCard={props.addShoppingCard} product={product} />
            <ProductDetailsSlider />
            <ProductDetailsSliderPost />
        </>
    );
}

export default ProductDetails;