import http from "./httpService";


function login(username, password) {
    return http.post('/api-token-auth/', { username, password });
};


function signup(username, email, password) {
    return http.post('/user/register/', { username, email, password });
};


export { login, signup }