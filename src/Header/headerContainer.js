import React from "react";
import logo from '../assets/ball.png'
import "./header.css"
import Header from "./headerComponent";
import * as axios from "axios";
import {set_user_data, unlogin_user} from "../redux/Actions/AuthActions";
import {connect} from "react-redux";
import {getUserData, unlogin} from "../API/api";
class HeaderContainer extends React.Component{
    componentDidMount(){

        getUserData().then(response =>{
            console.log(response)
            if(response.data.resultCode === 0){
                const {login, email, id} = response.data.data
                this.props.setUserData({login, email, id})
            }
        })
    }
    exit = () => {
        unlogin().then(response => {
            this.props.unloginUser(false)
        })
    }
    render(){
        return <Header {...this.props} exit = {this.exit}/>
}
}

const mapStateToProps = (state) => {
    return{
        login: state.AuthReducer.login,
        isAuth: state.AuthReducer.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setUserData: (data) => {dispatch(set_user_data(data))},
        unloginUser: (data) => {dispatch(unlogin_user(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);