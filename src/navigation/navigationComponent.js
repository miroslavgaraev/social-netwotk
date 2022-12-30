import React from "react";
import "./navigation.css"
import {NavLink} from "react-router-dom";
function Navigation() {
    return (
            <div className={'navigation'}>
                <NavLink to={'/'}>Profile</NavLink>
                <NavLink to={'/messages'}>Messages</NavLink>
                <NavLink to={'/news'}>News</NavLink>
                <NavLink to={'/music'}>Music</NavLink>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
    );
}

export default Navigation;