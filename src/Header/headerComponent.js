import React from "react";
import logo from "../assets/ball.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { login, isAuth } = props;
  return (
    <div className={"headerCont"}>
      <div className={"white"}></div>
      <div className={"header"}>
        <img className={"logo"} src={logo} />
        <NavLink to={"/login"}>{isAuth ? login : "Login"}</NavLink>
      </div>
      <div className={"white"}></div>
    </div>
  );
}

export default Header;