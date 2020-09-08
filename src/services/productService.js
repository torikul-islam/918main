import http from "./httpService";


function getAllProducts() {
    return http.get('/products/');
};


function getProductById(id) {
    return http.get(`/products/${id}/`);
};

function getProductByUrl(url) {
    return http.get(`/products/?${url}`);
};


function getProductByPieceId(ids) {
    return http.get(`/products/?piece_ids=${ids}`);
};

function createProductLike(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/user/product/likes/', data, {
            headers: { "Authorization": `Token ${token}` }
        });
    }
}

function getUserProductLike() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/user/product/likes/', { headers: { "Authorization": `Token ${token}` } })
    }
}

function createProduct(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/products/create/', data, {
            headers: {
                "Authorization": `Token ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
}



export default { getAllProducts, getProductById, getProductByUrl, getProductByPieceId, getUserProductLike, createProductLike, createProduct }