import React from "react";
import { connect } from "react-redux";
import CreateGroup from "./CreateGroup";
import { setActiveCreateGroupTC, setNameGroupTextTC, addGroupTC, selectUsersInGroupTC, getGroupsTC } from "../../redux/chatsReducer";

const CreateGroupContainer = (props) => {
    return <CreateGroup {...props} />
}


const mapStateToProps = (state) => ({
    createGroupActive: state.chatsPage.createGroupActive,
    nameGroupText: state.chatsPage.nameGroupText,
    users: state.chatsPage.users,
    selectedUsersInGroup: state.chatsPage.selectedUsersInGroup,
    authUserId: state.authUser.userId
})

export default connect(mapStateToProps, {setActiveCreateGroupTC, setNameGroupTextTC, addGroupTC, selectUsersInGroupTC, getGroupsTC})(CreateGroupContainer)