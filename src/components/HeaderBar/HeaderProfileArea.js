import React, {useState} from 'react'
import classes from './HeaderProfileArea.module.css'
import icon from "../../assets/Dropdown_ic.svg"
import COGNITO_CONFIG from '../../configs/configs';


export default function HeaderProfileArea(props) {
    const [name, setName] = useState(props.name);

    let role = props.role;
    if (props.isLoggedIn)
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
    ); else return (<div className={classes.ProfileArea}><a href={COGNITO_CONFIG.SIGNIN_URL}>Sign in</a></div>)
}