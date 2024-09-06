import React from "react";
import classes from './DropDownGroupMenu.module.css'
import viewProfilePhoto from '../../../../Assets/userName.png'


const DropDownGroupMenu = ({setProfileActive, setMenuActive, menuActive }) => {
    return (
        <nav className={menuActive ? classes.menu + ' ' + classes.active : classes.menu}>
            <ul className={classes.menuList}>
                <div className={classes.menuItem} onClick={() => { setProfileActive(true); setMenuActive(false) }}>
                    <img src={viewProfilePhoto} height={25} width={25} />
                    <li>View group info</li>
                </div>
            </ul>
        </nav>
    )
}

export default DropDownGroupMenu