import React from 'react'
import classes from './Input.module.css'

const Input = ({label}) => {
    return (
        <div className={classes.input__container}>
            <input type="text" className={classes.input} required/>
            <label htmlFor="input" className={classes.label}>
                {label}
            </label>
            <div className={classes.line}>

            </div>
        </div>
    )
}

export default Input
