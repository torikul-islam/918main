import React, { useEffect, useState } from 'react';
import NavbarB from '../nav/navbarB';
import ProductDetailsTitle from './productDetailsTitle';
import ProductDetailsSlider from './postDetailsSlider';
import ProductDetailsSliderPost from './productDetailsSliderPost';
import productServices from '../../services/productService';
import projectServices from '../../services/projectService';
import ShopThreeSlide from '../shop/shopThreeSlide';
import Modal from '../common/modal/modal';
import Signup from '../auth/signup';
import Login from '../auth/login';




function ProductDetails(props) {
    const [modal, setModal] = useState({ isOpen: false, name: null });
    const [product, setProduct] = useState({});
    const [productLike, setProductLike] = useState([]);
    const [project, setProject] = useState([]);
    const token = localStorage.getItem('token');



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        (async function () {
            const { data } = await productServices.getProductById(props.match.params.id);
            setProduct(data);
        })()
    }, [props.match.params.id]);

    useEffect(() => {
        (async function () {
            if (token) {
                let { data } = await projectServices.getProject();
                let board = localStorage.getItem('boardName');

                if (data && board) {
                    const firstIdx = data.find(b => b.name.toLowerCase() === board.toLowerCase())
                    data = data.filter((x, i, a) => (a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i) && firstIdx.uuid !== x.uuid);
                    setProject([{ ...firstIdx }, ...data]);
                } else {
                    data = data.filter((x, i, a) => a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i);
                    setProject(data);
                }
            }
        })()
    }, [token]);

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
    }, [modal]);

    async function clickProductLike(item) {
        let form = new FormData();
        form.set('product', props.match.params.id);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await productServices.createProductLike(form);
            if (data) {
                setProductLike([...productLike, { uuid: null, product: item }]);
            }
        }
    };



    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };
    function clickSearchItem(item) {

    }
    function onChangeSearch(item) {

    }

    const { isOpen, name } = modal;

    return (
        <>
            <NavbarB  {...props}
                searchData={[]}
                clickSearchItem={clickSearchItem}
                onChangeSearch={onChangeSearch}
                search="null"
            />
            <ProductDetailsTitle
                {...props}
                clickProductLike={clickProductLike}
                addShoppingCard={props.addShoppingCard}
                product={product}
                productLike={productLike}
                openModal={openModal}
                project={project}
            />
            <ProductDetailsSlider {...props} />
            <ShopThreeSlide pagename="product_details" />
            <ProductDetailsSliderPost {...props} />

            {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={openModal} closeModal={closeModal} />} />}
            {name === 'login' && <Modal isOpen={isOpen} childComp={<Login openModal={openModal} closeModal={closeModal} />} />}

        </>
    );
}

export default ProductDetails;