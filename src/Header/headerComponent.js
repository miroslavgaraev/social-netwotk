import React from "react";
import logo from "../assets/ball.png";
import {NavLink, useNavigate} from "react-router-dom";
import {unlogin} from "../API/api";

function Header(props) {
  const { login, isAuth, exit } = props;


  return (
    <div className={"header"}>
        <img className={"header__logo"} src={logo} />
          {!isAuth ?
              <div></div>
              :
              <div className={'header__login-cont'}>
                  <div className={'header__login'}><h1>{login}</h1></div>

                  <div className={'header__leave'}><button className={'header__leave__btn'} onClick={exit}>Выйти</button></div>
              </div>
          }
    </div>
  );
}

export default Header;