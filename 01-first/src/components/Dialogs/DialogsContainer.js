import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redax/dialog-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state  = props.store.getState().messagePage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange =(body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));    
       
    }
    return (
       <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagePage={state}
        />
    )
}

export default DialogsContainer;
