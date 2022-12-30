import {useDispatch} from "react-redux";
import {ADD_COMMENT} from "../Constants/Constants";


export const addComment = (comment) => {
    return{
        type:ADD_COMMENT,
        data:comment
    }
}