import {SET_USER_DATA, UNLOGIN_USER} from "../Constants/Constants";

export const set_user_data = (data) =>{
    return{
        type:SET_USER_DATA,
        data:data
    }
}
export const unlogin_user = (data) =>{
    return{
        type:UNLOGIN_USER,
        data:data
    }
}
