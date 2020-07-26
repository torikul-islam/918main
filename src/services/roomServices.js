import http from "./httpService";


function getAllRooms() {
    return http.get('/rooms/');
};


function getRoomsByIds(ids) {
    return http.get(`/inspirations/?room_ids=${ids}`);
};


export default { getAllRooms, getRoomsByIds }