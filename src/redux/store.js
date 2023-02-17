import {combineReducers, createStore} from 'redux'
import PostReducers from './Reducer/PostReducers'
import MessagesReducers from "./Reducer/MessagesReducers";
import AuthReducers from "./Reducer/authReducer";
import FilmsReducers from "./Reducer/FilmsReducers";

let reducers = combineReducers({
    AddPostReducer: PostReducers,
    MessageReducer: MessagesReducers,
    AuthReducer: AuthReducers,
    FilmsReducer: FilmsReducers
});

let store = createStore(reducers);
export default store