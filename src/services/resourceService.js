import http from "./httpService";


function getAllResources() {
    return http.get('/resources/');
};

async function getResourcesByRoomStyle(url) {
    return http.get('/resources/' + url)
}


export default { getAllResources, getResourcesByRoomStyle }