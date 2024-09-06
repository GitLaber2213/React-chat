import Profile from "./Profile"
import { connect } from "react-redux"
import { setActiveProfileTC, LoginTC } from '../../redux/profileReducer'


const ProfileContainer = (props) => {
    return <Profile {...props} />
}


const mapStateToProps = (state) => ({
    userId: state.authUser.userId,
    name: state.authUser.name,
    avatar: state.authUser.avatar,
    userName: state.authUser.userName,
    email: state.authUser.email,
    phone: state.authUser.phone,
    webSite: state.authUser.webSite,
    active: state.authUser.profileActive,
})


export default connect(mapStateToProps, { setActiveProfileTC, LoginTC })(ProfileContainer)