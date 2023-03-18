import React from "react";
import {NavLink} from "react-router-dom";
import {set_UserId} from "../redux/Actions/MessagesAction";
import {useDispatch, useSelector} from "react-redux";
function Navigation() {
    const dispatch = useDispatch()
    const setUserId = (userId) => {
        dispatch(set_UserId(userId))
    }
    const {id} = useSelector((state) => state.AuthReducer)
    return (
            <div className={'navigation'}>
                <NavLink onClick={() => {setUserId(id)}} to={'/'}>Profile</NavLink>
                <NavLink to={'/messages'}>Messages</NavLink>
                <NavLink to={'/films'}>Films</NavLink>
                <NavLink to={'/music'}>Music</NavLink>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
    );
}

export default Navigation;