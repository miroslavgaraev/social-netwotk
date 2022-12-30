import {SET_USER_PROFILE} from "../Constants/Constants";

export const setUserProfile = (data) => {
    return{
        type:SET_USER_PROFILE,
        profile:data
    }
}