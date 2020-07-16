import React, { useEffect, useState } from 'react';
import BlogHead from '../blog/bloghead';
import SliderPost from '../common/slider/sliderPost';
import resourceServices from '../../services/resourceService';
import productServices from '../../services/productService';
import BlogSlider from './blogSlider';
import './blog.css';



function Blog() {
    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState([]);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await resourceServices.getAllResources();
            setResource(data.results);
        })()
    }, []);

    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            setProduct(data.results);
        })()
    }, []);

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <>
            <BlogHead data={resource.slice(0, 1)} product={product.slice(0, 4)} />
            <BlogSlider resource={resource.slice(1)} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
        </>
    );
}


export default Blog;
