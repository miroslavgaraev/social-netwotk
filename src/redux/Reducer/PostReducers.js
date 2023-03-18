// import img from "../../Main/post/images/image.jpg";
import {ADD_COMMENT, ADD_POST, DELETE_POST, EDIT_POST, SET_USER_PROFILE} from "../Constants/Constants";


let initialState = {
    postArray: [{text: 'hello', commentsArray: ['привет', "пока"]},
        {text: 'hello2', commentsArray: []},
        {text: 'hello3', commentsArray: []},
        {text: 'hello4', commentsArray: []},
        {text: 'hello5', commentsArray: []}],
    profile: null
}
let PostReducers = (state = initialState, action) => {
    let posts = [...state.postArray]
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case ADD_POST:
            posts.push({text: action.data, commentsArray: []})
            return {
                ...state,
                postArray: posts

            }
        case DELETE_POST:
            posts = posts.filter((item, index) => index !== action.index)
            return {
                ...state,
                postArray: posts
            }
        case EDIT_POST:

            posts = posts.map((item, index) => {
                if (index === action.data.index) {
                    item.text = action.data.postText
                }
                return item
            })
            console.log(posts)
            return {
                ...state,
                postArray: posts
            }
        case ADD_COMMENT:
            posts = posts.map((item, index) => {
                if (index === action.data.index) {
                    item.commentsArray.push(action.data.text)
                }
                return item
            })
            return {
                ...state,
                postArray: posts
            }
        default:
            return state

    }
}
export default PostReducers