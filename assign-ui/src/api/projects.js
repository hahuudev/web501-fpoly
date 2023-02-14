import request from "../configs/request";

export const getFullProjects = () => {
    return request.get("/projects");
};

export const deleteProject = ({ id }) => {
    return request.delete(`/projects/${id}`);
};
