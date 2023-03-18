import React from "react";
import "./main.css"

import smallAvatar from '../assets/avatar.jpg'
import profileBigPhoto from '../assets/priroda.jpg'
import PostContainer from "./post/postContainer";

const Main = (props) =>{
    const {posts, newPostElement, addNewPost, onPhotoSelect, userId, id} = props
    return (
        <div className={'main'}>
            <div className={'profile'}>
                <div ><img className={'profileBigPhoto'} src={profileBigPhoto}/></div>

                <div className={'profilePhoto'}>

                    <img className={'avatar'} src={props?.user?.photos.small ? props.user.photos.small: smallAvatar}/>
                    {userId === id ? <div>
                        <label className={'changePhotoLabel'}>
                            <input className={'changePhotoInput'} type={'file'} onChange={onPhotoSelect}/>
                            <span>Сменить аватар</span>
                        </label>
                    </div> : null}
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
            {posts.map((item,index)=>{
                return(<PostContainer item={item} addNewPost={addNewPost} key={index} index={index} />)
            })}
        </div>
    );
}

export default Main;