import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink> 
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}
const Dialogs = () => {

    let dialogData = [
        {
            id: 1,
            name: 'Oleh'
        },
        {
            id: 2,
            name: 'Andryi'
        },
        {
            id: 3,
            name: 'Volodja'
        },
        {
            id: 4,
            name: 'Sveta'
        },
        {
            id: 5,
            name: 'Zina'
        },
        {
            id: 6,
            name: 'Bob'
        }
    ];

    let dialogMessage = [
        {
            id: 1,
            name: 'Hi'
        },
        {
            id: 2,
            name: 'Bra'
        },
        {
            id: 3,
            name: 'Ok sdf sdf'
        },
        {
            id: 4,
            name: 'asdasdasdasd'
        },
        {
            id: 5,
            name: 'Zina'
        },
        {
            id: 6,
            name: 'No'
        }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogData.[0].name} id={dialogData.[0].id}/>
                <DialogItem name={dialogData.[1].name} id={dialogData.[1].id}/>
            </div>
            <div className={style.messages}>
                <Message message = 'Hi'/>
                <Message message = 'Bra'/>
                <Message message = 'Ok sdf sdf'/>
                <Message message = 'Ya ssd ddfij '/>
                <Message message = 'No'/>
            </div>

        </div>
    )
}

export default Dialogs;
