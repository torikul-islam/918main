import http from "./httpService";


function getAllProducts() {
    return http.get('/products/');
};


function getProductById(id) {
    return http.get(`/products/${id}/`);
};

function getProductByPieceId(ids) {
    return http.get(`products/?piece_ids=${ids}`);
};


export default { getAllProducts, getProductById, getProductByPieceId }