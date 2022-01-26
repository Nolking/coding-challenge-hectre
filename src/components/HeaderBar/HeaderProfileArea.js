import React from 'react'
import classes from './HeaderProfileArea.module.css'
import icon from "../../assets/Dropdown_ic.svg"


export default function HeaderProfileArea(props) {
    let name = props.name;
    let role = props.role;
    return (
        <div className={classes.ProfileArea}>
            <svg height="32" width="64">
                <circle cx="32" cy="16" r="16" fill="#DB9200"></circle>
            </svg>
            <div className={classes.ProfileNameAndRole}>
                <b className={classes.ProfileUserName}>{name}</b>
                <b className={classes.ProfileUserRole}>{role}</b>
            </div>
            <img src={icon} className={classes.Dropdown_Icon} alt="icon" />
        </div>
    );
}