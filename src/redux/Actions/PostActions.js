import {useDispatch} from "react-redux";
import {ADD_POST, DELETE_POST, EDIT_POST} from "../Constants/Constants";

export const addPost  = (post) => {
    return {
        type:ADD_POST,
        data:post
    }
}

export const PostActions = (data) => {
    const dispatch = useDispatch()
    return(dispatch(addPost(data)))
}


export const delete_post= (index) => {
    return {
        type: DELETE_POST,
        index: index
    }
}
export const edit_post = (data) => {
    return {
        type: EDIT_POST,
        data:data
    }
}