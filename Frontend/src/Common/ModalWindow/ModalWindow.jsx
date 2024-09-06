import React from "react";
import classes from './ModalWindow.module.css'

const ModalWindow = ({ active, setActive, children, windowHeader}) => {
    return (
        <div className={active ? classes.modalWindowContainer + ' ' + classes.active : classes.modalWindowContainer} onClick={() => setActive(false)}>
            <div className={active ? classes.modalWindowUnContainer + ' ' + classes.active : classes.modalWindowUnContainer} onClick={e => e.stopPropagation()}>
                <div className={classes.windowHeadContainer}>
                    <div className={classes.windowHead}>{windowHeader}</div>
                    <div className={classes.closeWindowBtn} onClick={() => setActive(false)}></div>
                </div>
                {children}
            </div>
        </div>
    )
}


export default ModalWindow;