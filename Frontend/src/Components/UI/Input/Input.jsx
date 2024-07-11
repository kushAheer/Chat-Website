import React from 'react'
import classes from './input.module.css'
function Input(props) {
    return (
        <>
            <div className={`${classes.waveGroup}`}>
                <label className={`${classes.label}`}>{props.label}</label>
                <input required value={props.val} type={props.type} onChange={props.onChange} className={`${classes.input}`}/>
                
            </div>
        </>
    )
}

export default Input