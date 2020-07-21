import http from "./httpService";


function getAllPieces() {
    return http.get('/pieces/');
};


export default { getAllPieces }