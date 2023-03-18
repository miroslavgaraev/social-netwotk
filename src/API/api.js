import * as axios from "axios";

const basicURL = `https://social-network.samuraijs.com/api/1.0/`
const basicFilmsURL = `http://www.omdbapi.com/?apikey=feec8e69&`
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
export const getFilms = (filmName, type, page) => {
    return axios.get(`${basicFilmsURL}s=${filmName}&type=${type}&page=${page}`
        )
}
export const getFilmData = (filmId) => {
    return axios.get(`${basicFilmsURL}i=${filmId}&plot=full`
        )}
export const login = (email, password, rememberMe) => {
    return axios.post(`${basicURL}auth/login`, {email, password, rememberMe}, { withCredentials: true }).then(response => {
        if(response.data.resultCode === 0){
            return getUserData()
        }
    })}
export const unlogin = () => {
    return axios.delete(`${basicURL}auth/login`,{ withCredentials: true }).then(response => {
        console.log(response)

    })
}

export const getUser = (id) => {
    return axios.get(`${basicURL}profile/${id}`, {withCredentials: true})
}

export const downloadPhoto = (file) => {
    let formData = new FormData();
    formData.append("image", file)
    return axios.put(`${basicURL}profile/photo`, formData, {headers: {"Content-Type": 'multipart/form-data'}, withCredentials: true})
}
