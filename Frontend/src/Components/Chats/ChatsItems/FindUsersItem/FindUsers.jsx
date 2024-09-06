import React from "react";
import classes from './FindUsers.module.css'

const FindUsers = (props) => {
    return (
        <div className={classes.findUsersContainer}>
            <div className={classes.findUsersUnContainer}>
                <input type="text" placeholder="Search" onChange={(event) => {props.getFindTextTC(event.target.value, props.users)}} />
            </div>
        </div>
    )
}

export default FindUsers