import {applyMiddleware, combineReducers, createStore} from 'redux'
import PostReducers from './Reducer/PostReducers'
import MessagesReducers from "./Reducer/MessagesReducers";
import AuthReducers from "./Reducer/authReducer";
import FilmsReducers from "./Reducer/FilmsReducers";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    AddPostReducer: PostReducers,
    MessageReducer: MessagesReducers,
    AuthReducer: AuthReducers,
    FilmsReducer: FilmsReducers
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store