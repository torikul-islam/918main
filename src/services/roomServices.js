import http from "./httpService";


function getAllRooms() {
    return http.get('/rooms/');
};


function getRoomsByIds(ids) {
    return http.get(`/inspirations/?room_ids=${ids}`);
};


function getRoomByUrl(url) {
    return http.get(`/inspirations/?${url}`);
}

export default { getAllRooms, getRoomsByIds, getRoomByUrl }