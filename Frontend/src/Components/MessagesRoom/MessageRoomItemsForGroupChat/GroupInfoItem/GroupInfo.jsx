import React from "react";
import groupPhoto from '../../../../Assets/groupInChat.png'
import UserItem from './UserItem/UserItem'
import ModalWindow from '../../../../Common/ModalWindow/ModalWindow'

import classes from './GroupInfo.module.css'


const GroupInfo = ({ selectedUserInfo, setProfileActive, profileActive, users }) => {

    const foundUsers = users.filter(user => selectedUserInfo.selectedUserInGroup.map(user => user.id).includes(user.id));
    console.log(foundUsers)

    return (
        <ModalWindow active={profileActive} setActive={setProfileActive} windowHeader={"Group info"}>
            <div className={classes.profileHead}>
                <img src={selectedUserInfo.avatar != null ? selectedUserInfo.avatar : groupPhoto} height={50} width={50} />
                <div className={classes.profileHeadUserName}>{selectedUserInfo.nameGroupText}</div>
            </div>

            <div className={classes.userList}>
                {foundUsers.map(user => {
                    return <UserItem
                        id={user.id}
                        name={user.name}
                        avatar={user.avatar}

                    />
                })}
            </div>

        </ModalWindow>
    )
}

export default GroupInfo