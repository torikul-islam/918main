import http from "./httpService";


function getProject() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/projects/', {
            headers: { "Authorization": `Token ${token}` }
        });
    }
};



function createProject(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/projects/', data, {
            headers: {
                "Authorization": `Token ${token}`,
                'Content-Type': 'multipart/form-data'
            },

        });
    }
};


export default { getProject, createProject }