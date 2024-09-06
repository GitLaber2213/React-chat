import React from "react";
import classes from './ChatItem.module.css'
import userPhoto from '../../../../Assets/user.png'
import starPhoto from '../../../../Assets/star.png'

const ChatItems = ({ key, id, name, avatar, isActive, setActive, favorite, getMessagesTC, userId }) => {
    return (
        <div key={key} onClick={() => { setActive(id); getMessagesTC(userId, id) }} className={isActive ? classes.chatItem + ' ' + classes.chatActive : classes.chatItem}>
            <div className={classes.chatItemAvatar}>
                <img src={avatar != null ? avatar : userPhoto} height={50} width={50} />
            </div>
            <div className={classes.chatItemName}>{name}</div>

            {
                favorite && (
                    <div className={classes.chatItemFavorite}>
                        <img src={starPhoto} height={15} width={15} />
                    </div>
                )
            }
        </div>
    );
}


export default ChatItems