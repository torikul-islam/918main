import React, { useEffect, useState } from 'react';
import resourceService from '../../services/resourceService';
import productServices from '../../services/productService';
import BlogHead from '../blog/blogHead';
import BlogSlider from './blogSlider';
import './blog.css';




function Blog(props) {
    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState({ count: null, next: null, previous: null, results: [] });
    const [resourceLike, setResourceLike] = useState([]);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        getResourceByRoom(props.match.params.roomId);
    }, []);


    async function getResourceByRoom(id, page = 1, arr = []) {
        const { data } = await resourceService.getResourcesByUrl(`page=${page}&room_ids=${id}`);
        arr = [...arr, ...data.results]
        if (data.next) {
            const matched = data.next.match(/page=\d+/gi)[0];
            const num = matched.split('=')[1];
            getResourceByRoom(id, num, arr);
        } else {
            setResource({ count: data.count, next: data.next, previous: data.previous, results: arr });
        }
    }



    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await resourceService.getUserResourceLike();
                if (data) {
                    setResourceLike(data);
                }
            }
        })()
    }, []);

    async function clickResourceLike(item) {
        let form = new FormData();
        form.set('resource', props.match.params.id);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await resourceService.createResourceLike(form);
            if (data) {
                setResourceLike([...resourceLike, { uuid: null, resource: item }]);
            }
        }
    }
    useEffect(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }), [props.match.params.id]);

    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            setProduct(data.results);
        })()
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", handleResize);
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize)
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    async function onPageChange(val) {
        const diff = resource.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && resource.next !== null) {
                const { data } = await resourceService.getResourcesByUrl(resource.next.split('?')[1]);
                setResource({ count: data.count, next: data.next, previous: data.previous, results: [...resource.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    function onChangeSearch(e) {

    }

    return (
        <>
            <BlogHead
                {...props}
                onChangeSearch={onChangeSearch}
                searchData={[]}
                clickResourceLike={clickResourceLike}
                resourceLike={resourceLike}
                resource={resource.results}
                product={product.slice(0, 4)}
            />
            <BlogSlider
                {...props}
                count={resource.count - 1}
                resource={resource.results}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>
    );
}


export default Blog;
