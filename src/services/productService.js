import http from "./httpService";


function getAllProducts() {
    return http.get('/products/');
};


function getProductById(id) {
    return http.get(`/products/${id}/`);
};


export default { getAllProducts, getProductById }