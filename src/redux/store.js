import {combineReducers, createStore} from 'redux'
import PostReducers from './Reducer/PostReducers'
import MessagesReducers from "./Reducer/MessagesReducers";
import AuthReducers from "./Reducer/authReducer";
let reducers = combineReducers({
    AddPostReducer:PostReducers,
    MessageReducer:MessagesReducers,
    AuthReducer:AuthReducers
});

let store = createStore(reducers);
export default store