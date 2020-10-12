import React from 'react';
import style from './Message.module.css';



const Message = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={style.messages}>
            {/* {props.message}; */}
            <div className={style.searchBlock}>
                <div className={style.searchInput}>
                    <textarea ref={newMessageElement} className={style.searchButton} type='text'></textarea>
                    <button onClick={addMessage} className={style.sendButton} type='button' value="Send">Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Message;
