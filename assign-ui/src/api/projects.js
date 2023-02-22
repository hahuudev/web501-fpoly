import request from "../configs/request";

export const getFullProjects = ({ category_id }) => {
    if (category_id) return request.get(`/projects?categoriesId=${category_id}`);
    return request.get("/projects?_expand=categories");
};

export const getProjectById = ({ id }) => {
    return request.get("/projects/" + id);
};

export const addProject = (data) => {
    return request.post("/projects", data);
};

export const updateProject = (data) => {
    return request.put(`/projects/${data.id}`, data);
};

export const deleteProject = ({ id }) => {
    return request.delete(`/projects/${id}`);
};
