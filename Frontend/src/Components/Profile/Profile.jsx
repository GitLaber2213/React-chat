import React from "react"
import classes from './Profile.module.css'
import ModalWindow from "../../Common/ModalWindow/ModalWindow"

import userPhoto from '../../Assets/user.png'
import userNamePhoto from '../../Assets/userName.png'
import emailPhoto from '../../Assets/email.png'
import phonePhoto from '../../Assets/phone.png'
import webSitePhoto from '../../Assets/website.png'

const Profile = ({ active, setActiveProfileTC, name, avatar, userName, email, phone, webSite, getAuthUserDataTC }) => {
    return (
        <ModalWindow active={active} setActive={setActiveProfileTC} windowHeader={"Info"}>
            <form>
                <div className={classes.form}>
                    <div className={classes.el}>
                        <img src={avatar != null ? avatar : userPhoto} height={50} width={50} />
                        <div className={classes.profileHeadUserName}>{name}</div>
                    </div>
                    <div className={classes.el}>
                        <img src={userNamePhoto} height={25} width={25} />
                        <div>{userName}</div>
                    </div>
                    <div className={classes.el}>
                        <img src={emailPhoto} height={25} width={25} />
                        <div>{email}</div>
                    </div>
                    <div className={classes.el}>
                        <img src={phonePhoto} height={25} width={25} />
                        <div>{phone}</div>
                    </div>
                    <div className={classes.el}>
                        <img src={webSitePhoto} height={25} width={25} />
                        <div>{webSite}</div>
                    </div>
                </div>
            </form>
        </ModalWindow>
    )
}

export default Profile