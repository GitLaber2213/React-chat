import React from "react";
import classes from './Message.module.css'


const Message = ({ message, timeStamp, myMessage, userName }) => {
    console.log(userName)
    return (
        <div className={classes.messageContainer}>
            <div className={myMessage ? classes.messageUnContainer + ' ' + classes.active : classes.messageUnContainer}>
                <div className={classes.messageFlexDirection}>
                    <div className={classes.messageUserName}>
                        {userName} 
                    </div>
                    <div>
                        {message}
                    </div>
                </div>
                <div className={classes.timeStamp}>
                    {timeStamp}
                </div>
            </div>
        </div>
    )
}

export default Message