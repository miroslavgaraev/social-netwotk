import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {delete_post, edit_post} from "../../redux/Actions/PostActions";
import Post from "./postComponent";

function PostContainer(props){
    const {text, commentsArray} = props.item
    const index = props.index
    const addNewPost = props.addNewPost
    const commentRef = React.createRef()
    const dispatch = useDispatch()
    const [activatedInput, setActivatedInput] = useState(false)
    const [postText, setPostText] = useState('')


    const deletePost = (index) => {
        dispatch(delete_post(index))
    }
    const deactivateInput = (e) => {
        if (e.key === 'Enter'){
            setActivatedInput(false)
            dispatch(edit_post({postText, index}))
        }
    }
    const onChangeText = (el) => {
        setPostText(el.currentTarget.value)
    }
    const addComment = (e) => {
        let text = commentRef.current.value;
        if(e.key === 'Enter'){
            addNewPost(2, index, text)
            commentRef.current.value = ''
        }
    }
    return(<Post index={index} text={text} commentsArray={commentsArray} addNewPost={addNewPost} commentRef={commentRef} activatedInput={activatedInput} setActivatedInput={setActivatedInput} postText={postText} setPostText={setPostText} addComment={addComment} onChangeText={onChangeText} deactivateInput={deactivateInput} deletePost={deletePost}/>)
}

export default PostContainer;