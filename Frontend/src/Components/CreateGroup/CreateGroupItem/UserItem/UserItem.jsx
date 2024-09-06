import React from "react";
import classes from './UserItem.module.css'
import userPhoto from '../../../../Assets/user.png'

const UserItem = ({ id, name, avatar, selectedUsersInGroup, selectUsersInGroupTC }) => {
    const isSelected = selectedUsersInGroup.some(user => user.id === id);

    const toggleSelection = (id) => {
        const newSelectedUsers = isSelected
            ?
            selectedUsersInGroup.filter(item => item.id !== id)
            :
            [...selectedUsersInGroup, { id }];

        selectUsersInGroupTC(newSelectedUsers);
    };

    return (
        <div className={isSelected ? classes.userItemContainer + ' ' + classes.selected : classes.userItemContainer} onClick={() => toggleSelection(id)}>
            <img src={avatar !== null ? avatar : userPhoto} height={40} width={40} />
            <div>{name}</div>
        </div>
    )
}

export default UserItem