import React from "react";
import logo from '../assets/ball.png'
import "./header.css"
import Header from "./headerComponent";
import * as axios from "axios";
import {set_user_data} from "../redux/Actions/AuthActions";
import {connect} from "react-redux";
import {getUserData} from "../API/api";
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

    render(){
        return <Header {...this.props}/>
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
        setUserData: (data) => {dispatch(set_user_data(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);