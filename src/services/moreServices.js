import http from "./httpService";


function get(url) {
    return http.get(url);
};




export default { get }