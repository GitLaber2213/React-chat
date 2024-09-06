import React from "react";
import classes from './MainComponent.module.css'
import SiteBarMenuContainer from "../SiteBarMenu/SiteBarMenuContainer";
import Profile from "../Profile/Profile";
import ChatsContainer from "../Chats/ChatsContainer";
import MessagesRoomContainer from "../MessagesRoom/MessagesRoomContainer";
import LoginContainer from "../Login/LoginContainer";


const MainComponent = ({ isAuth, getUsersTC }) => {
    return (
        <div className={classes.container}>
            {isAuth ? (
                <>
                <SiteBarMenuContainer />
                <Profile />
                <ChatsContainer />
                <MessagesRoomContainer />
                </>
            )
                :
                <LoginContainer /> 

            }
        </div>
    )
}

export default MainComponent