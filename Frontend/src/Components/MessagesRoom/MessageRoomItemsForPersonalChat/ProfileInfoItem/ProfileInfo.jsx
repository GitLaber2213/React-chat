import React from "react";
import userNamePhoto from '../../../../Assets/userName.png'
import emailPhoto from '../../../../Assets/email.png'
import phonePhoto from '../../../../Assets/phone.png'
import webSitePhoto from '../../../../Assets/website.png'
import ModalWindow from '../../../../Common/ModalWindow/ModalWindow'

import classes from './ProfileInfo.module.css'


const ProfileInfo = ({selectedUserInfo, userPhoto, setProfileActive, profileActive}) => {
    return (
        <ModalWindow active={profileActive} setActive={setProfileActive} windowHeader={"User info"}>
            <div className={classes.profileHead}>
                <img src={selectedUserInfo.avatar != null ? selectedUserInfo.avatar : userPhoto} height={50} width={50} />
                <div className={classes.profileHeadUserName}>{selectedUserInfo.name}</div>
            </div>

            <div className={classes.form}>
                <div className={classes.el}>
                    <img src={userNamePhoto} height={25} width={25} />
                    <div>{selectedUserInfo.username}</div>
                </div>
                <div className={classes.el}>
                    <img src={emailPhoto} height={25} width={25} />
                    {selectedUserInfo.email}
                </div>
                <div className={classes.el}>
                    <img src={phonePhoto} height={25} width={25} />
                    {selectedUserInfo.phone}
                </div>
                <div className={classes.el}>
                    <img src={webSitePhoto} height={25} width={25} />
                    {selectedUserInfo.website}
                </div>
            </div>
        </ModalWindow>
    )
}

export default ProfileInfo