import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';


const Navbar = () => {
    return (
    <nav className={style.nav}>
      <div className={style.navItem}>
        <NavLink to='/profile'>Profile</NavLink>
      </div> 
      <div className={style.navItem}>
        <NavLink to='/dialogs'>Message</NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink to='/settings'>Settings</NavLink>
      </div>     
    </nav>
  )
}
export default Navbar;