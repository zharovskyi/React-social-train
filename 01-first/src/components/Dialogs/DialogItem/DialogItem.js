import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img className={style.img} src={props.imgSrc} alt={props.name}/>
            <NavLink to={path}>{props.name}</NavLink> 
        </div>
    );
}



export default DialogItem;
