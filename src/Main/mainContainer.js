import {connect, useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {addPost} from "../redux/Actions/PostActions";
import Main from "./mainComponent";
import {addComment} from "../redux/Actions/CommentsActions";
import axios from "axios";
import {setUserProfile} from "../redux/Actions/userProfileAction";
import {useLocation, useNavigate} from "react-router-dom";

function MainContainer(props) {
    console.log(props)
    const {userProfile} = props
    const location = useLocation()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.AddPostReducer.postArray)
    const user = useSelector(state => state.AddPostReducer.profile)
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.AuthReducer);
    console.log(user, 'user')
    let newPostElement = React.createRef()
    const addNewPost = (event_id, index, comment = '') => {
        let text = newPostElement.current.value;

        if (event_id === 1 && text !== '') {
            dispatch(addPost(text))
        } else if (event_id === 2 && comment !== '') {
            dispatch(addComment({text: comment, index: index}))
        }


        newPostElement.current.value = ''
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0${location.pathname}`).then(response => {
            console.log(location.pathname)
            dispatch(setUserProfile(response.data))
        })
    }, [])
    if(isAuth === false) return navigate('/login')
    return (<Main {...props} user={user}/>)
}
export default MainContainer;