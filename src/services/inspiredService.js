import http from "./httpService";


function getAllInspired() {
    return http.get('/inspirations/');
};
function getInspirationByRoomId(roomId) {
    return http.get('/inspirations/?room_ids=' + roomId);
};

function getInspirationByUrl(url) {
    return http.get('/inspirations/?' + url);
};

function getInspiredByRoomOrStyleId(endpoint) {
    return http.get('/inspirations' + endpoint);
};

function createInspirationLike(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/user/inspiration/likes/', data, {
            headers: { "Authorization": `Token ${token}` }
        });
    }
}

function getUserInspirationLike() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/user/inspiration/likes/', { headers: { "Authorization": `Token ${token}` } })
    }
}



export default { getAllInspired, getInspiredByRoomOrStyleId, getInspirationByUrl, getInspirationByRoomId, createInspirationLike, getUserInspirationLike }