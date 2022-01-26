// import './App.css';
import React from "react"
import HeaderProfileArea from "./HeaderProfileArea";
import classes from "./HeaderBar.module.css"
import {NavLink} from 'react-router-dom'

function HeaderBar(props) {
  return (
      <header className={classes['headerBar']}>
        <NavLink className={classes.HectreLogo} to={'/'}>
                </NavLink>
        <HeaderProfileArea name="Yi Wan" role="supervisor"></HeaderProfileArea>
      </header>
  );
}

export default HeaderBar;
