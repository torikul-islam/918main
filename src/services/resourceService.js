import http from "./httpService";


function getAllResources() {
    return http.get('/resources/');
};


function createResource(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/resources/create/', data, {
            headers: {
                "Authorization": `Token ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
}
async function getResourcesByRoomStyle(url) {
    return http.get('/resources/' + url)
}


async function getResourcesByUrl(url) {
    return http.get('/resources/?' + url)
}


async function createResourceLike(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/user/resource/likes/', data, { headers: { "Authorization": `Token ${token}` } })
    }
}


async function getUserResourceLike() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/user/resource/likes/', { headers: { "Authorization": `Token ${token}` } })
    }
}





export default { getAllResources, getResourcesByRoomStyle, createResource, getResourcesByUrl, getUserResourceLike, createResourceLike }