import request from "~/configs/request";

export const getFullPosts = () => {
    return request.get("/posts");
};

export const getPostById = ({ id }) => {
    return request.get("/posts/" + id);
};

export const getPostByCategoryId = ({ category_id }) => {
    return request.get("/posts?categories_postId=" + category_id);
};

export const addPost = (data) => {
    return request.post("/posts", data);
};

export const updatePost = (data) => {
    return request.put(`/posts/${data.id}`, data);
};

export const deletePost = ({ id }) => {
    return request.delete(`/posts/${id}`);
};
