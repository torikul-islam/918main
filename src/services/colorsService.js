import http from "./httpService";


function getAllColors() {
    return http.get('/product_colors/');
};


export default { getAllColors }