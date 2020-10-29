import React from 'react';
import style from './Message.module.css';



const Message = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
    }
    
    return (
        <div className={style.messages}>
            <div className={style.searchBlock}>
                <div className={style.searchInput}>
                    <textarea ref={newMessageElement} value={props.message} className={style.searchButton} type='text'></textarea>
                    <button onClick={addMessage} className={style.sendButton} type='button' value="Send">Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Message;
