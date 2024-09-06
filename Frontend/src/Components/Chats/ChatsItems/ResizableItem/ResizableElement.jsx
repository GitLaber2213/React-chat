import React, { useRef } from "react";
import classes from './ResizableElement.module.css'

const ResizableElement = ({ setWidth, width }) => {
    const containerRef = useRef(null);

    const handleMouseDown = (event) => {
        event.preventDefault();

        const startX = event.clientX;
        const startWidth = width;
        const sensitivityFactor = 2;

        const onMouseMove = (moveEvent) => {
            const newWidth = startWidth + (moveEvent.clientX - startX) * sensitivityFactor;
            setWidth(newWidth);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    return (
        <div className={classes.resizableElement} ref={containerRef} onMouseDown={handleMouseDown} ></div>
    )
}

export default ResizableElement