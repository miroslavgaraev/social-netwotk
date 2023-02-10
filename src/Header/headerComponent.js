import React from "react";
import logo from "../assets/ball.png";
import "./header.css";
import {NavLink, useNavigate} from "react-router-dom";
import {unlogin} from "../API/api";

function Header(props) {
  const { login, isAuth, exit } = props;


  return (
    <div className={"headerCont"}>
      <div className={"white"}></div>
      <div className={"header"}>
        <img className={"logo"} src={logo} />
          {!isAuth ?
              <div>
              <NavLink to={'/login'}>Login</NavLink>
              </div>
              :
              <div className={'login-cont'}>
                  <p className={'login'}>{login}</p>
                  <button className={'leave'} onClick={exit}>Выйти</button>
              </div>
          }

      </div>
      <div className={"white"}></div>
    </div>
  );
}

export default Header;