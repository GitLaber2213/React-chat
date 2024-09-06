import React from "react";
import { connect } from "react-redux";
import MainComponent from "./MainComponent";
import { getUsersTC } from "../../redux/chatsReducer";


const MainComponentContainer = (props) => {
    return <MainComponent {...props} />
}


const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth
})


export default connect(mapStateToProps, {getUsersTC})(MainComponentContainer)