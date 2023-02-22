import request from "~/configs/request"

export const getInfo = ()=> {
    return request.get('/profile')
}

export const editInfo = (data)=> {
    return request.put('/profile', data)
}