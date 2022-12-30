import React, {useState} from "react";
import "./post.css"
import img1 from '../../assets/delete.png'
import img2 from '../../assets/edit.png'
import {delete_post, edit_post} from "../../redux/Actions/PostActions";
import {useDispatch} from "react-redux";

function Post(props) {
    // const {text, commentsArray} = props.item
    // const index = props.index
    // const addNewPost = props.addNewPost
    // const commentRef = React.createRef()
    // const dispatch = useDispatch()
    // const [activatedInput, setActivatedInput] = useState(false)
    // const [postText, setPostText] = useState('')
    //
    //
    // const deletePost = (index) => {
    //     dispatch(delete_post(index))
    // }
    // const deactivateInput = (e) => {
    //     if (e.key === 'Enter'){
    //         setActivatedInput(false)
    //         dispatch(edit_post({postText, index}))
    //     }
    // }
    // const onChangeText = (el) => {
    //     setPostText(el.currentTarget.value)
    // }
    // const addComment = (e) => {
    //     let text = commentRef.current.value;
    //     if(e.key === 'Enter'){
    //         addNewPost(2, index, text)
    //         commentRef.current.value = ''
    //     }
    // }
    const {activatedInput, deactivateInput, onChangeText, deletePost, setActivatedInput, commentRef, addComment, commentsArray, text, index} = props
    return (
        <div className={'post'}>
            <div className={'text'}>
                <div className={'textCont'}>
                    {activatedInput && (<input onKeyPress={deactivateInput} onChange={onChangeText} autoFocus={true} placeholder={'Введите текст'}/>)}
                    {!activatedInput && (<p className={'postText'}>{text}</p>)}
                </div>
                <button className={'postsButton'} onClick={() =>{deletePost(index)}}><img className={'deleteButtonImg'} src={img1}/></button>
                <button className={'postsButton'} onClick={() => {setActivatedInput(true)}}><img className={'edit-button-img'} src={img2}/></button>
            </div>
            <input placeholder={'Оставьте комментарий'} ref={commentRef} onKeyPress={addComment}/>
            <div className={'comments'}>
                {commentsArray.map((item, index) => {
                    return (<p>{item}</p>)
                })}
            </div>
        </div>
    );
}

export default Post;