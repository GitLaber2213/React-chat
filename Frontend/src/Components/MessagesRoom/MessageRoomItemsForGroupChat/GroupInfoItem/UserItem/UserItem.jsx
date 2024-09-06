import React from "react";
import classes from './UserItem.module.css'
import userPhoto from '../../../../../Assets/user.png'

const UserItem = ({ id, name, avatar }) => {
    return (
        <div className={classes.userItemContainer}>
            <img src={avatar !== null ? avatar : userPhoto} height={40} width={40} />
            <div>{name}</div>
        </div>
    )
}

export default UserItem