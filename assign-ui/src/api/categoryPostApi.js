import request from "~/configs/request";

export const getFullCategoryPosts = () => {
    return request.get("/categories_post");
};

export const getCategoryPostById = ({ id }) => {
    return request.get("/categories/" + id);
};

export const addCategoryPost = (data) => {
    return request.post("/categories", data);
};

export const updateCategoryPost = (data) => {
    return request.put(`/categories/${data.id}`, data);
};

export const deleteCategoryPost = ({ id }) => {
    return request.delete(`/categories/${id}`);
};