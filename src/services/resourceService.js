import http from "./httpService";


function getAllResources() {
    return http.get('/resources/');
};

async function getResourcesByRoomStyle(url) {
    return http.get('/resources/' + url)
}

async function getUserResourceLike() {
    const token = localStorage.getItem('token');
    return http.get('/user/resource/likes/', { headers: { "Authorization": `Token ${token}` } })
}





export default { getAllResources, getResourcesByRoomStyle, getUserResourceLike }