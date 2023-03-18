import React, {useState} from "react";
import logo from '../assets/logo.json'
import navigationIcon from '../assets/navigation-icon.png'
import {NavLink} from "react-router-dom";
import Lottie from "lottie-react"

function Header(props) {
    const {login, isAuth, exit} = props;
    const [navigation, setNavigation] = useState(false)

    return (
        <div className={'header-cont'}>
            <div className={"header"}>

                <Lottie className={'header__logo'} animationData={logo}/>
                {!isAuth ?
                    <div></div>
                    :
                    <div className={'header__login-cont'}>
                        <div className={'header__login'}><h1>{login}</h1></div>
                        <div className={'header__openNavigation'}>
                            <button className={'header__openNavigationButton'} onClick={() => setNavigation(!navigation)}><img className={'header__openNavigationImg'} src={navigationIcon}/></button>
                        </div>
                        <div className={'header__leave'}>
                            <button className={'header__leave__btn'} onClick={exit}>Выйти</button>
                        </div>
                    </div>
                }

            </div>

            {navigation ?
                <div className={'navigation-mobile'}>
                    <NavLink to={'/'}>Profile</NavLink>
                    <NavLink to={'/messages'}>Messages</NavLink>
                    <NavLink to={'/films'}>Films</NavLink>
                    <NavLink to={'/music'}>Music</NavLink>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default Header;