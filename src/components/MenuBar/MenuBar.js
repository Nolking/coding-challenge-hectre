import React from 'react';
import MenuIcon from '../../assets/Menu_on_ic.svg'
import ChemicalIcon from '../../assets/Chemical_white_ic.svg'
import ReportIcon from '../../assets/Report_white_ic.svg'
import { NavLink } from 'react-router-dom'


const MenuBar = (props) => {
    return (
        <div className='menu-bar'>
            <div className='menu-bar-icon-wrapper'>
                <img src={MenuIcon} alt="icon" />
            </div>
            <div className='menu-bar-icon-wrapper'>
                <NavLink className="menu-bar-icon chemical-icon" to={'/chemical'}>
                </NavLink>
            </div>
            <div className='menu-bar-icon-wrapper'>
                <NavLink className="menu-bar-icon report-icon" to={'/report'}>
                </NavLink>
            </div>

        </div>
    )
}

export default MenuBar;