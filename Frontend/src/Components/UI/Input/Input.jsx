import React from 'react'
import classes from './input.module.css'
function Input(props) {
    return (
        <>
            <div className={`${classes.waveGroup}`}>
                <label className={`${classes.label}`}>{props.label}</label>
                <input required="" type="text" className={`${classes.input}`}/>
                
            </div>
        </>
    )
}

export default Input