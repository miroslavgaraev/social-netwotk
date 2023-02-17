import {SET_FILMS_CURRENT_PAGE, SET_TOTAL_FILMS_COUNT} from "../Constants/Constants";

let initialState = {pageSize: 10, totalFilmsCount: 0, currentPage: 1, isLoading: true}

let FilmsReducers = (state = initialState, action) => {
    switch(action.type){
        case SET_TOTAL_FILMS_COUNT:
            return{
                ...state,
                totalFilmsCount:action.data
            }
        case SET_FILMS_CURRENT_PAGE:
            return{
                ...state,
                currentPage:action.data
            }

        default:
            return state
    }
}
export default FilmsReducers