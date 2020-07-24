import React, { useEffect, useState } from 'react';
import NavbarB from '../nav/navbarB';
import ProductDetailsTitle from './productDetailsTitle';
import ProductDetailsSlider from './postDetailsSlider';
import ProductDetailsSliderPost from './productDetailsSliderPost';
import productServices from '../../services/productService';





function ProductDetails(props) {
    const [product, setProduct] = useState({});
    const [productLike, setProductLike] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await productServices.getProductById(props.match.params.id);
            setProduct(data);
        })()
    }, [props.match.params.id]);


    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {

                const { data } = await productServices.getUserProductLike();
                if (data) {
                    setProductLike(data);
                }
            }
        })()
    }, []);

    async function clickProductLike(item) {
        let form = new FormData();
        form.set('product', props.match.params.id);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await productServices.createProductLike(form);
            setProductLike([...productLike, { uuid: null, product: item }]);
        }
    }


    return (
        <>
            <NavbarB  {...props} />
            <ProductDetailsTitle
                clickProductLike={clickProductLike}
                addShoppingCard={props.addShoppingCard}
                product={product}
                productLike={productLike}
            />
            <ProductDetailsSlider />
            <ProductDetailsSliderPost />
        </>
    );
}

export default ProductDetails;