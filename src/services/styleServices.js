import http from "./httpService";


function getAllStyle() {
    return http.get('/styles/');
};


// function getRoomsByIds(ids) {
//     return http.get(`/inspirations/?page=1&room_ids=${ids}`);
// };


export default { getAllStyle }