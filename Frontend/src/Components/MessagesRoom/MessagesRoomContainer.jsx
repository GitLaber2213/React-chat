import React from "react"
import MessagesRoom from './MessagesRoom';
import { connect } from "react-redux";
import { compose } from "redux";
import { setFavoriteTC, setMessageTextTC, addMessageTC, deleteChatTC, getMessagesTC } from "../../redux/chatsReducer";

const MessagesRoomContainer = (props) => {
    return <MessagesRoom {...props} />
}


const mapStateToProps = (state) => ({
    selectedUserInfo: state.chatsPage.selectedUserInfo,
    messages: state.chatsPage.messages,
    messageText: state.chatsPage.messageText,
    authUserId: state.authUser.userId,
    authUserName: state.authUser.name,
    users: state.chatsPage.users

})


export default compose(
    connect(mapStateToProps, { setFavoriteTC, setMessageTextTC, addMessageTC, deleteChatTC, getMessagesTC })(MessagesRoomContainer)
)