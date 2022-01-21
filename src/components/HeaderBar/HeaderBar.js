// import './App.css';
import React from "react"
import logo from "../../assets/Hectre_Logo.svg"
import HeaderProfileArea from "./HeaderProfileArea";
import classes from "./HeaderBar.module.css"

function HeaderBar(props) {
  return (
      <header className={classes['headerBar']}>
        <img src={logo} className={classes.HectreLogo} alt="logo" />
        <HeaderProfileArea name="Yi Wan" role="supervisor"></HeaderProfileArea>
      </header>
  );
}

export default HeaderBar;
