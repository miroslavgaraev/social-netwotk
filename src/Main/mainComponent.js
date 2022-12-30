import React from "react";
import "./main.css"
import Post from "./post/postComponent";
import {addPost, PostActions} from "../redux/Actions/PostActions";
import {useDispatch, useSelector} from "react-redux";

import smallAvatar from '../assets/avatar.jpg'
import avatarBg from '../assets/priroda.jpg'
import PostContainer from "./post/postContainer";

const Main = (props) =>{
    const {posts, newPostElement, addNewPost} = props
    console.log(props, 'props')
    return (
        <div className={'main'}>
            <div className={'profile'}>
                <div className={'profileBigPhoto'}/>

                <div className={'profilePhoto'}>
                    <img className={'avatar'} src={smallAvatar}/>
                </div>
                <div className={'profileStatus'}>
                    <span>{props?.user?.fullName? props.user.fullName: 'Hello'}</span>
                    <span>{props?.user?.aboutMe? props.user.aboutMe: 'Hello'}</span>
                </div>

            </div>
            <div className={'textareaButton'}>
                <textarea className={'newPostTextArea'} id='1' placeholder={'Введите текст поста'} ref={newPostElement}></textarea>
                <button onClick={() =>{addNewPost(1)}} className={'addPost'}>Добавить пост</button>
            </div>
            {/*{posts.map((item,index)=>{*/}
            {/*    return(<PostContainer item={item} addNewPost={addNewPost} key={index} index={index} />)*/}
            {/*})}*/}
        </div>
    );
}

export default Main;