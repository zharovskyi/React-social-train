import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redax/dialog-reducer';


const Dialogs = (props) => {
    let state  = props.messagePage;
    let dialogsElements = state.dialogs.map(
        dialog=><DialogItem name={dialog.name} imgSrc={dialog.imgSrc} id={dialog.id} key={dialog.id}/>
    )
    // debugger;
    let messagesElements = state.messages.map(
        m =><Message message={m.message} id={m.id} key={m.id}/>
    ) 

    let newMassageBody = state.newMassageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange =(e) => {
        let body = e.target.value;      
        props.updateNewMessageBody(body);
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea 
                            value={newMassageBody} 
                            onChange = {onNewMessageChange}
                            placeholder="Enter Massege">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
