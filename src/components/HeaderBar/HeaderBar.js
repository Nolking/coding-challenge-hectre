// import './App.css';
import React, { useState, useEffect} from "react"
import HeaderProfileArea from "./HeaderProfileArea";
import classes from "./HeaderBar.module.css"
import {NavLink} from 'react-router-dom'
import {UserInfo} from "../../data/TestData.js"

function HeaderBar(props) {
  const [fullName, setFullName] = useState(props.UserFullName);
  useEffect(() => {
    setFullName(`${UserInfo.given_name} ${UserInfo.family_name}`)
  }, [fullName])
  
  return (
      <header className={classes['headerBar']}>
        <NavLink className={classes.HectreLogo} to={'/'}>
                </NavLink>
               <HeaderProfileArea isLoggedIn={props.isLoggedIn} name={fullName} role="supervisor"></HeaderProfileArea>
      </header>
  );
}

export default HeaderBar;
