import http from "./httpService";


function getUser() {
    const token = localStorage.getItem('token');
    return http.get('/user/',
        { headers: { "Authorization": `Token ${token}` } });
};




export default getUser;