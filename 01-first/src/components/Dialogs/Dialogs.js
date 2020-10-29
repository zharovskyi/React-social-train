import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData.map(
        dialog=><DialogItem name={dialog.name} imgSrc={dialog.imgSrc} id={dialog.id}/>
    )
    
    let messages = props.state.dialogMessage.map(
        messages=><Message message={messages.message} id={messages.id}/>
    ) 

    let newMessageBody = props.state.newMessageBody;
    let onSendMEssageClick = () => {

    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messages}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter MAssege"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMEssageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
