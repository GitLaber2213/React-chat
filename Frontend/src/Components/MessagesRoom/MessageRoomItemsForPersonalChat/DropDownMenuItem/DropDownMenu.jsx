import React from "react";
import classes from './DropDownMenu.module.css'
import viewProfilePhoto from '../../../../Assets/userName.png'
import starPhoto from '../../../../Assets/star.png'
import deletePhoto from '../../../../Assets/delete.png'


const DropDownMenu = ({ selectedUserInfo, authUserId, setFavoriteTC, deleteChatTC, setProfileActive, setMenuActive, menuActive, getMessagesTC }) => {
    return (
        <nav className={menuActive ? classes.menu + ' ' + classes.active : classes.menu}>
            <ul className={classes.menuList}>
                <div className={classes.menuItem} onClick={() => { setProfileActive(true); setMenuActive(false) }}>
                    <img src={viewProfilePhoto} height={25} width={25} />
                    <li>View profile</li>
                </div>
                <div className={classes.menuItem} onClick={() => { setFavoriteTC(selectedUserInfo.id, authUserId); setMenuActive(false) }}>
                    <img src={starPhoto} height={25} width={25} />
                    <li>Add in favorite</li>
                </div>
                <div className={classes.menuItem} onClick={() => { deleteChatTC(selectedUserInfo.id, authUserId); getMessagesTC(authUserId, selectedUserInfo.id); setMenuActive(false) }}>
                    <img src={deletePhoto} height={30} width={30} />
                    <li>Delete chat</li>
                </div>
            </ul>
        </nav>
    )
}

export default DropDownMenu