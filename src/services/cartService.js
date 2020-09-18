import http from "./httpService";


function getUserProductCart() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/user/cart/', {
            headers: { "Authorization": `Token ${token}` }
        });
    }
};

function createProductCart(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/user/cart/', data, {
            headers: { "Authorization": `Token ${token}` }
        });
    }
}

function deleteProductCart(uuid) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.delete(`/user/cart/${uuid}/`, {
            headers: { "Authorization": `Token ${token}` }
        });
    }
};


export { getUserProductCart, createProductCart, deleteProductCart }