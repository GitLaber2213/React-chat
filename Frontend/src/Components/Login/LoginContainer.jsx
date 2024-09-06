import React from "react";
import Login from "./Login";
import { LoginTC, setLoginUserNameTextTC } from '../../redux/profileReducer'
import { connect } from "react-redux";

const LoginContainer = (props) => {
    return <Login {...props} />
}

const mapStateToProps = (state) => ({
    loginUserNameText: state.authUser.loginUserNameText
})

export default connect(mapStateToProps, { LoginTC, setLoginUserNameTextTC })(LoginContainer)