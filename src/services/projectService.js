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

function addedItemToWorkspace(data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.post('/project/workspace/item/', data, {
            headers: {
                "Authorization": `Token ${token}`,
                'Content-Type': 'multipart/form-data'
            },

        });
    }

}

function getUserProjectProduct() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/user/project/', {
            headers: { "Authorization": `Token ${token}` }
        })
    }
}

function getAllProjectName() {
    const token = localStorage.getItem('token');
    if (token) {
        return http.get('/projects/', {
            headers: { "Authorization": `Token ${token}` }
        })
    }
}

function activeProject(uuid) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.put(`/projects/set_active/${uuid}/`, {}, {
            headers: { "Authorization": `Token ${token}` }
        })
    }
}
function updateWorkspaceItem(itemUuid, data) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.patch(`/project/workspace/item/${itemUuid}/`, data, {
            headers: { "Authorization": `Token ${token}` }
        })
    }
}

function workspaceItemDelete(uuid) {
    const token = localStorage.getItem('token');
    if (token) {
        return http.delete(`/project/workspace/item/${uuid}/`, {
            headers: { "Authorization": `Token ${token}` }
        })
    }

}


export default { getProject, updateWorkspaceItem, createProject, activeProject, getAllProjectName, getUserProjectProduct, addedItemToWorkspace, workspaceItemDelete }