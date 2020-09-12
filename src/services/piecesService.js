import http from "./httpService";


function getAllPieces() {
    return http.get('/pieces/');
};

function getAllPieceWithCategory() {
    return http.get('/piece_category/');
};

export default { getAllPieces, getAllPieceWithCategory }