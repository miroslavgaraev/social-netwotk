import {SET_FILMS_CURRENT_PAGE, SET_TOTAL_FILMS_COUNT} from "../Constants/Constants";

export const set_films_count = (data) => {
    return{
        type:SET_TOTAL_FILMS_COUNT,
        data:data
    }
}
export const set_films_current_page = (data) => {
    return{
        type:SET_FILMS_CURRENT_PAGE,
        data:data
    }
}