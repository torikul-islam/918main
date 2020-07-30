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


function createInspiration(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/inspirations/create/', data, {
            headers: {
                "Authorization": `Token ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
}

export default { getAllInspired, getInspiredByRoomOrStyleId, getInspirationByUrl, getInspirationByRoomId, createInspirationLike, createInspiration, getUserInspirationLike }