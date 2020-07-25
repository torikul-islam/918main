import React, { useEffect, useState } from 'react';
import resourceService from '../../services/resourceService';
import productServices from '../../services/productService';
import BlogHead from '../blog/blogHead';
import BlogSlider from './blogSlider';
import './blog.css';



function Blog(props) {
    const [pageSize, setPageSize] = useState(4);
    const [resource, setResource] = useState([]);
    const [resourceLike, setResourceLike] = useState([]);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getResourcesByRoomStyle(`?room_ids=${props.match.params.roomId}`);
            setResource(data.results);
        })()
    }, [props.match.params.id]);


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
            setResourceLike([...resourceLike, { uuid: null, resource: item }]);
        }
    }


    useEffect(() => {
        (async function () {
            const { data } = await productServices.getAllProducts();
            setProduct(data.results);
        })()
    }, []);


    useEffect(() => window.addEventListener("resize", handleResize));

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <>
            <BlogHead
                {...props}
                clickResourceLike={clickResourceLike}
                resourceLike={resourceLike}
                resource={resource.find(x => x.uuid === props.match.params.id)}
                product={product.slice(0, 4)}
            />
            <BlogSlider
                resource={resource.filter(x => x.uuid !== props.match.params.id)}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>
    );
}


export default Blog;
