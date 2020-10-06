import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';


const Navbar = () => {
    return (
    <nav className={style.nav}>
      <div className={style.navItem}>
        <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
      </div> 
      <div className={style.navItem}>
        <NavLink to='/dialogs' activeClassName={style.active}>Message</NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink to='/news' activeClassName={style.active}>News</NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
      </div>    
      <div className={style.navItem}>
        <NavLink to='/sidebar' activeClassName={style.active}>Sidebar</NavLink>
      </div>  
    </nav>
  )
}
export default Navbar;