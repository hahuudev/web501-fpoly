import request from "~/configs/request";

export const getFullCategoryPrjs = () => {
    return request.get("/categories");
};

export const getCategoryById = ({ id }) => {
    return request.get("/categories/" + id);
};

export const addCategory = (data) => {
    return request.post("/categories", data);
};

export const updateCategory = (data) => {
    return request.put(`/categories/${data.id}`, data);
};

export const deleteCategory = ({ id }) => {
    return request.delete(`/categories/${id}`);
};
