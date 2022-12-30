import {SET_USER_DATA} from "../Constants/Constants";

let initialState = {
    login: null, email: null, id:null, isAuth:false
}
let AuthReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}
export default AuthReducers