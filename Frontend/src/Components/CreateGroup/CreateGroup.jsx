import React from "react";
import classes from './CreateGroup.module.css'
import ModalWindow from "../../Common/ModalWindow/ModalWindow";
import groupPhoto from '../../Assets/group.png'
import UserItem from "./CreateGroupItem/UserItem/UserItem";

const CreateGroup = ({ setActiveCreateGroupTC, 
    createGroupActive, 
    setNameGroupTextTC, 
    nameGroupText, 
    selectUsersInGroupTC, 
    selectedUsersInGroup, 
    addGroupTC, 
    getGroupsTC,
    users, 
    authUserId }) => {
    return (
        <ModalWindow active={createGroupActive} setActive={setActiveCreateGroupTC} windowHeader={"Create group"}>
            <div className={classes.createGroupContainer}>
                <div className={classes.createGroupData}>
                    <img src={groupPhoto} height={25} width={25} />
                    <input type="text" placeholder="Group name" value={nameGroupText} onChange={(event) => setNameGroupTextTC(event.target.value)} />
                </div>
                <div className={classes.userList}>
                    {users.map(user => (
                        <UserItem
                            id={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            selectedUsersInGroup={selectedUsersInGroup}
                            selectUsersInGroupTC={selectUsersInGroupTC}
                        />
                    ))}
                </div>
                <div className={classes.createGroupOptions}>
                    <div onClick={() => {setActiveCreateGroupTC(false);     
                        setNameGroupTextTC('');
                        selectUsersInGroupTC([])}}>Cancel</div>
                    <div onClick={() => {
                        addGroupTC(nameGroupText, selectedUsersInGroup, authUserId);
                        setActiveCreateGroupTC(false);
                        getGroupsTC();
                        setNameGroupTextTC('');
                        selectUsersInGroupTC([])}}>Create</div>
                </div>
            </div>
        </ModalWindow>
    )
}


export default CreateGroup