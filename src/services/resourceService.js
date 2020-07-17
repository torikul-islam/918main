import http from "./httpService";


function getAllResources() {
    return http.get('resources/');
};



export default { getAllResources }