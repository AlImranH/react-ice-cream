import React from 'react'
import classes from './Scoop.module.css'

const scoop = ({ scoop }) => {
    return (
        <div className={[classes.scoop, classes[scoop]].join(" ")}></div>
    )
}

export default scoop
