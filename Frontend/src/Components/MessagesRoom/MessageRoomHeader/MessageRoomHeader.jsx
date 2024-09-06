import React from "react";
import classes from './MessageRoomHeader.module.css'

const MessageRoomHeader = ({ avatar, defaultPhoto, name, menuActive, setProfileActive, setMenuActive }) => {
    return (
        <>
            <div className={classes.profileInfo} onClick={() => setProfileActive(true)}>
                <img src={avatar != null ? avatar : defaultPhoto} height={40} width={40} />
                <div className={classes.nameUser}>{name}</div>
            </div>
            <div className={menuActive ? classes.openMenuBtn + ' ' + classes.active : classes.openMenuBtn} onClick={() => setMenuActive(!menuActive)}>
                &#10247;
            </div>
        </>
    )
}

export default MessageRoomHeader