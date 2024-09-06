import React from "react";
import classes from './Login.module.css'
import userNamePhoto from '../../Assets/userName.png'

const Login = ({ LoginTC, setLoginUserNameTextTC, loginUserNameText }) => {
    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginUnContainer}>
                <img src={userNamePhoto} height={25} width={25} />
                <input type="text" placeholder="username" value={loginUserNameText} onChange={(e) => setLoginUserNameTextTC(e.target.value)} />
            </div>
            <div className={classes.optionContainer}>
                <div onClick={() => {LoginTC(loginUserNameText); setLoginUserNameTextTC('')}}>Login</div>
            </div>

            <div className={classes.PS}>
                P.S Authorization is mediocre since the real project provides real email addresses and phone numbers. In this test task, authorization occurs only using an existing username.
            </div>
        </div>
    )
}


export default Login;