import http from "./httpService";


function getAllProducts() {
    return http.get('/products/');
};


// function signup(username, email, password) {
//     return http.post('/user/register/', { username, email, password });
// };


export default { getAllProducts }