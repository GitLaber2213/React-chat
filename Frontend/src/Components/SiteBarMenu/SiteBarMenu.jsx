import React from "react";
import classes from './SiteBarMenu.module.css'
import userPhoto from '../../Assets/user.png'
import profilePhoto from '../../Assets/userName.png'
import groupPhoto from '../../Assets/group.png'
import logoutPhoto from '../../Assets/logout.png'
import ProfileContainer from "../../Components/Profile/ProfileContainer";
import CreateGroupContainer from "../../Components/CreateGroup/CreateGroupContainer";


const SiteBarMenu = ({ isActive, setActiveTC, avatar, name, setActiveProfileTC, LogOutTC, setActiveCreateGroupTC }) => {
    return (
        <>
            <div className={isActive ? classes.siteBarContainer + ' ' + classes.active : classes.siteBarContainer} onClick={() => setActiveTC(false)}>
                <div className={classes.siteBarContent}>

                    <div className={classes.siteBarHeader}>
                        <img src={avatar != null ? avatar : userPhoto} height={50} width={50} />
                        <div>{name}</div>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                        <div className={classes.profile} onClick={() => setActiveProfileTC(true)}>
                            <img src={profilePhoto} height={25} width={25} />
                            <div>Profile</div>
                        </div>

                        <div className={classes.profile} onClick={() => { setActiveCreateGroupTC(true); setActiveTC(false) }}>
                            <img src={groupPhoto} height={25} width={25} />
                            <div>Create group</div>
                        </div>

                        <div className={classes.profile} onClick={() => { LogOutTC(); setActiveTC(false) }}>
                            <img src={logoutPhoto} height={25} width={25} />
                            <div>Log out</div>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileContainer />
            <CreateGroupContainer />
        </>
    )
}

export default SiteBarMenu