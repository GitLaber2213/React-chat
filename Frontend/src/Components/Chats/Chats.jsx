import React, { useEffect, useState} from "react";
import classes from './Chats.module.css'
import FindUsers from "./ChatsItems/FindUsersItem/FindUsers";
import menuBarPhoto from '../../Assets/menuBar.png'
import Accordion from "./ChatsItems/ChatItem/Accordion/Accordion";
import ResizableElement from "./ChatsItems/ResizableItem/ResizableElement";


const Chats = (props) => {
    const [width, setWidth] = useState(400)

    useEffect(() => {
        props.getUsersTC(props.userId)
        props.getGroupsTC()
    }, []);


    return (
        <div className={classes.chatsContainer} style={{ width: `${width}px` }}>
            <ResizableElement setWidth={setWidth} width={width}/>

            <div className={classes.chatsHeader}>
                <img onClick={() => props.setActiveTC(true)} src={menuBarPhoto} height={40} width={40} />
                <FindUsers
                    users={props.users}
                    getFindTextTC={props.getFindTextTC}
                    findText={props.findText} />
            </div>

            <Accordion {...props} />
        </div>
    )
}


export default Chats 