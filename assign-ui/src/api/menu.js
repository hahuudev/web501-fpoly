import request from "../configs/request";

export const getFullMenus = () => {
    return request.get("/menus");
};

export const addMenu = (data)=> {
    return request.post("/menus", data)
}

export const deleteMenu = ({ id }) => {
    return request.delete(`/menus/${id}`);
};
