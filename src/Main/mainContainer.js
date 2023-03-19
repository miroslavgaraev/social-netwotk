import { connect, useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import { addPost } from "../redux/Actions/PostActions";
import Main from "./mainComponent";
import { addComment } from "../redux/Actions/CommentsActions";
import axios from "axios";
import { setUserProfile } from "../redux/Actions/userProfileAction";
import { useLocation, useNavigate } from "react-router-dom";
import {downloadPhoto, getStatus, getUser, setStatus} from "../API/api";

function MainContainer(props) {
  const { userProfile } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.AddPostReducer.postArray);
  const user = useSelector((state) => state.AddPostReducer.profile);
  const [statusText, setStatusText] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [userStatus, setUserStatus] = useState(null)
  const userId = useSelector((state) => state.MessageReducer.userId)
  const navigate = useNavigate();
  const { isAuth, id } = useSelector((state) => state.AuthReducer);
  let newPostElement = React.createRef();
  const onChange = (text) => {
    setStatusText(text)
  }
  const editStatus = async (e) => {
    if(e.key === 'Enter'){
      setShowInput(false)
      await setStatus(statusText)
    }
  }
  const onDoubleClick = (e) => {
    if(e.detail === 2) {
      setShowInput(true)
    }
  }
  const addNewPost = (event_id, index, comment = "") => {
    let text = newPostElement.current.value;
    if (event_id === 1 && text !== "") {
      dispatch(addPost(text));
    } else if (event_id === 2 && comment !== "") {
      dispatch(addComment({ text: comment, index: index }));
    }

    newPostElement.current.value = "";
  };
  const onPhotoSelect = (e) => {
    if (e.target.files.length){
      downloadPhoto(e.target.files[0])
    }
  };
  useEffect(() => {
    getUser(userId
    ).then((response) => {
      dispatch(setUserProfile(response.data));
    });
    getStatus(userId).then((response) => {
      setUserStatus(response.data)
    })
  }, []);
  useEffect(() => {
    getUser(userId
    ).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  }, [userId]);
  useEffect(() => {
    getStatus(userId).then((response) => {
      setUserStatus(response.data)
    })
  }, [showInput])
  if (isAuth === false) return navigate("/login");
  return (
    <Main
      {...props}
      user={user}
      newPostElement={newPostElement}
      addNewPost={addNewPost}
      posts={posts}
      onPhotoSelect={onPhotoSelect}
      userId = {userId}
      id = {id}
      showInput = {showInput}
      onDoubleClick = {onDoubleClick}
      editStatus = {editStatus}
      onChange={onChange}
      userStatus = {userStatus}
    />
  );
}

export default MainContainer;
