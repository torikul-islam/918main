import http from "./httpService";


function getAllInspired() {
    return http.get('inspirations/');
};

function getInspiredByRoomOrStyleId(endpoint) {
    return http.get('inspirations' + endpoint);
};


export default { getAllInspired, getInspiredByRoomOrStyleId }