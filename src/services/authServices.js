import http from "./httpService";


function login(email, password) {
    return http.post('/login/', { email, password });
};


function signup(username, email, password) {
    return http.post('/user/register/', { username, email, password });
};


export { login, signup }