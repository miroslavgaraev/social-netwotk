import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addPost } from "../redux/Actions/PostActions";
import Main from "./mainComponent";
import { addComment } from "../redux/Actions/CommentsActions";
import axios from "axios";
import { setUserProfile } from "../redux/Actions/userProfileAction";
import { useLocation, useNavigate } from "react-router-dom";
import {downloadPhoto, getUser} from "../API/api";

function MainContainer(props) {
  const { userProfile } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.AddPostReducer.postArray);
  const user = useSelector((state) => state.AddPostReducer.profile);
  const userId = useSelector((state) => state.MessageReducer.userId)
  const navigate = useNavigate();
  const { isAuth, id } = useSelector((state) => state.AuthReducer);
  let newPostElement = React.createRef();
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
  }, [userId]);
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
    />
  );
}

export default MainContainer;
