import * as axios from "axios";

const basicURL = `https://social-network.samuraijs.com/api/1.0/`
const API_KEY = {'API-KEY': '91245eb1-e4c2-4713-8462-f5e778ca21c6'}

export const getUserData = () => {
    return axios.get(`${basicURL}auth/me`, {withCredentials: true})
}

export const postFollowUser = (id) => {
    return axios.post(`${basicURL}follow/${id}`, {}, {withCredentials: true, headers: API_KEY})
}

export const deleteFollowUser = (id) => {
    return axios.delete(`${basicURL}follow/${id}`, {withCredentials: true, headers: API_KEY})
}
export const usersPage = (page, pageSize) => {
    return axios.get(`${basicURL}users?page=${page}&count=${pageSize}`, {withCredentials: true})
}
export const currentPageSize = (currentPage, pageSize) => {
    return axios.get(`${basicURL}users?page=${currentPage}&count=${pageSize}`, { withCredentials: true }
        )
}