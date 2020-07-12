import http from "./httpService";


function getAllInspired() {
    return http.get('/inspirations/');
};


// function signup(username, email, password) {
//     return http.post('/user/register/', { username, email, password });
// };


export default { getAllInspired }