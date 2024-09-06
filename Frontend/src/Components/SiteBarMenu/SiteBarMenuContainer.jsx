import React from "react";
import SiteBarMenu from "./SiteBarMenu";
import { compose } from "redux";
import { connect } from "react-redux";
import { setActiveTC } from '../../redux/menuReducer'
import { setActiveProfileTC, LogOutTC } from '../../redux/profileReducer'
import { setActiveCreateGroupTC } from "../../redux/chatsReducer";



const SiteBarMenuContainer = (props) => {
    return <SiteBarMenu {...props} />
}


const mapStateToProps = (state) => ({
    isActive: state.siteBarMenu.menuActive,
    createGroupActive: state.chatsPage.createGroupActive,
    profileActive: state.authUser.profileActive,
    name: state.authUser.name,
    avatar: state.authUser.avatar,
})

export default compose(
    connect(mapStateToProps, { setActiveTC, setActiveProfileTC, LogOutTC, setActiveCreateGroupTC })(SiteBarMenuContainer)
)