import React, { useState } from "react";
import AccordionItem from "./AccordionItem/AccordionItem";
import groupPhoto from '../../../../../Assets/groupInChat.png'
import ChatItem from "../ChatItem";

const Accordion = (props) => {
    const [activeChatId, setActiveChatId] = useState(false)

    const handleChatClick = (id) => {
        setActiveChatId(id);
        props.getSelectedUserIdTC(id, props.users, props.groups)
    };


    return (
        <div>
            <AccordionItem title={"Users"}>
                {props.users.map(chat => (
                    <ChatItem
                        key={chat.id}
                        id={chat.id}
                        name={chat.name}
                        avatar={chat.avatar}
                        favorite={chat.favorite}
                        isActive={chat.id === activeChatId}
                        getMessagesTC={props.getMessagesTC}
                        userId={props.userId}
                        setActive={handleChatClick} />
                ))}
            </AccordionItem>
            <AccordionItem title={"Groups"}>
                {props.groups.map(chat => (
                    <ChatItem
                        key={chat.id}
                        id={chat.id}
                        name={chat.nameGroupText}
                        avatar={groupPhoto}
                        favorite={chat.favorite}
                        isActive={chat.id === activeChatId}
                        getMessagesTC={props.getMessagesTC}
                        userId={props.userId}
                        setActive={handleChatClick} />
                ))}
            </AccordionItem>
        </div>
    )
}

export default Accordion