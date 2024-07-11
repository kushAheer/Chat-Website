import React from 'react'
import classes from './Button.module.css'
function Button(props) {
    return (
        <>
        <div className={`${props.p}`}>
            <button className={`${classes.buttonUi} `} type={props.type}> {props.children}</button>
        </div>
        </>
    )
}

export default Button
