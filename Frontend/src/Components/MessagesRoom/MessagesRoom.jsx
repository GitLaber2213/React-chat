import React, { useEffect, useRef, useState } from "react";
import classes from './MessagesRoom.module.css'
import sendMessagePhoto from '../../Assets/send.png'

import userPhoto from '../../Assets/user.png'
import groupPhoto from '../../Assets/groupInChat.png'

import ProfileInfo from "./MessageRoomItemsForPersonalChat/ProfileInfoItem/ProfileInfo";
import DropDownMenu from "./MessageRoomItemsForPersonalChat/DropDownMenuItem/DropDownMenu";
import Message from "./MessageRoomItemsForPersonalChat/MessageItem/Message";
import GroupInfo from "./MessageRoomItemsForGroupChat/GroupInfoItem/GroupInfo";
import MessageRoomHeader from "./MessageRoomHeader/MessageRoomHeader";
import DropDownGroupMenu from "./MessageRoomItemsForGroupChat/DropDownMenuItem/DropDownGroupMenu";

const Messagesroom = ({ selectedUserInfo,
    setFavoriteTC,
    setMessageTextTC,
    deleteChatTC,
    messageText,
    addMessageTC,
    messages,
    authUserId,
    authUserName,
    getMessagesTC,
    users }) => {


    const [profileActive, setProfileActive] = useState(false)
    const [menuActive, setMenuActive] = useState(false)
    const messagesEndRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addMessageTC(messageText, authUserId, authUserName, selectedUserInfo.id, selectedUserInfo.name);
            setMessageTextTC('');
        }
    }
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    console.log(selectedUserInfo)

    return (
        <div className={classes.messagesRoomContainer}>
            {selectedUserInfo.length !== 0 ? (
                <div className={classes.messagesRoomHeader}>

                    {selectedUserInfo.type === 'group' ? (
                        <>
                            <MessageRoomHeader
                                avatar={selectedUserInfo.avatar}
                                defaultPhoto={groupPhoto}
                                name={selectedUserInfo.nameGroupText}
                                menuActive={menuActive}
                                setMenuActive={setMenuActive}
                                setProfileActive={setProfileActive}
                            />
                            <DropDownGroupMenu
                                setMenuActive={setMenuActive}
                                setProfileActive={setProfileActive}
                                menuActive={menuActive}
                            />
                            <GroupInfo
                                selectedUserInfo={selectedUserInfo}
                                userPhoto={userPhoto}
                                users={users}
                                setProfileActive={setProfileActive}
                                profileActive={profileActive}
                            />
                        </>
                    ) : (
                        <>
                            <MessageRoomHeader
                                avatar={selectedUserInfo.avatar}
                                defaultPhoto={userPhoto}
                                name={selectedUserInfo.name}
                                menuActive={menuActive}
                                setMenuActive={setMenuActive}
                                setProfileActive={setProfileActive}
                            />
                            <DropDownMenu
                                selectedUserInfo={selectedUserInfo}
                                authUserId={authUserId}
                                setMenuActive={setMenuActive}
                                setFavoriteTC={setFavoriteTC}
                                setProfileActive={setProfileActive}
                                getMessagesTC={getMessagesTC}
                                menuActive={menuActive}
                                deleteChatTC={deleteChatTC}
                            />
                            <ProfileInfo
                                selectedUserInfo={selectedUserInfo}
                                userPhoto={userPhoto}
                                setProfileActive={setProfileActive}
                                profileActive={profileActive}
                            />
                        </>
                    )}

                </div>

            ) : ``}

            <div className={classes.messagesContainer}>
                {messages.map(m => {
                    return (
                        <Message
                            message={m.messageText.message}
                            timeStamp={m.messageText.timeStamp}
                            myMessage={authUserId === m.messageText.userId}
                        />
                    );
                })}
                <div ref={messagesEndRef}></div>
            </div>

            {selectedUserInfo.length !== 0 ? (
                <div className={classes.messagesRoomFooter}>
                    <div className={classes.messageRoomFooterChildElements}>
                        <textarea type="text" placeholder="Write a message..." onKeyDown={handleKeyDown} value={messageText} onChange={(event) => setMessageTextTC(event.target.value)} />
                        <img src={sendMessagePhoto} height={30} width={30} onClick={() => { addMessageTC(messageText, authUserId, authUserName, selectedUserInfo.id, selectedUserInfo.name); setMessageTextTC('') }} />
                    </div>
                </div>
            ) : ``}
        </div>
    )
}

export default Messagesroom