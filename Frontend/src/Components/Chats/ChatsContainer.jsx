import React from 'react'
import { connect } from 'react-redux'
import {getFindTextTC, getSelectedUserIdTC, getUsersTC, getMessagesTC, getGroupsTC} from '../../redux/chatsReducer'
import {setActiveTC} from '../../redux/menuReducer'
import Chats from './Chats'


const ChatsContainer = (props) => {

    return <Chats {...props}/>
}


const mapStateToProps = (state) => ({
    users: state.chatsPage.users,
    groups: state.chatsPage.groups,
    findText: state.chatsPage.findText,
    selectedUserId: state.chatsPage.selectedUserId,
    userId: state.authUser.userId,
    menuActive: state.siteBarMenu.menuActive,
})

export default connect(mapStateToProps, {getFindTextTC, getSelectedUserIdTC, setActiveTC, getUsersTC, getMessagesTC, getGroupsTC})(ChatsContainer)
