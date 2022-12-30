import {SET_USER_DATA} from "../Constants/Constants";

export const set_user_data = (data) =>{
    return{
        type:SET_USER_DATA,
        data:data
    }
}