import {
    FOLLOW,
    SET_CURRENT_PAGE, SET_USER_ID,
    SET_USERS,
    TOGGLE_IS_LOADING,
    TOTAL_USERS_COUNT,
    UNFOLLOW
} from "../Constants/Constants";

export const follow_user = (data) => {
    return{
        type:FOLLOW,
        data:data
    }
}
export const unfollow_user = (data) => {
    return{
        type:UNFOLLOW,
        data:data
    }
}

export const set_users = (data) =>{
    return{
        type:SET_USERS,
        data:data
    }
}

export const set_currentPage = (currentPage) =>{
    return{
        type:SET_CURRENT_PAGE,
        currentPage:currentPage
    }
}
export const set_totalUsersCount = (totalUsersCount) =>{
    return{
        type:TOTAL_USERS_COUNT,
        totalUsersCount:totalUsersCount
    }
}
export const setIsLoading = (isLoading) =>{
    return{
        type:TOGGLE_IS_LOADING,
        isLoading
    }
}

export const set_UserId = (id) => {
    return{
        type: SET_USER_ID,
        userId:id
    }
}