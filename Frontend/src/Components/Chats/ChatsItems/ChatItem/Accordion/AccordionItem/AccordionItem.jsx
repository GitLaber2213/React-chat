import React, { useState } from "react";
import classes from './AccordionItem.module.css'
import arrowPhoto from '../../../../../../Assets/arrow.png'

const AccordionItem = ({ title, children }) => {
    const [active, setActive] = useState(false)

    return (
        <div>
            <div className={classes.wrap}>
                <div className={classes.wrapHeader} onClick={() => setActive(!active)}>
                    <div>
                        {title}
                    </div>
                    <div className={active ? classes.active : ''}>
                        <img src={arrowPhoto} height={15} width={15} />
                    </div>
                </div>
                {active && (
                    <div className={classes.wrapBody}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}


export default AccordionItem