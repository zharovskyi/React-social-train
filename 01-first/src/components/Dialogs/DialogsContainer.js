import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redax/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {
//     let state  = props.store.getState().messagePage;
    
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//     let onNewMessageChange =(body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));    
       
//     }
//     return (
//        <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             messagePage={state}
//         />
//     )
// }

let mapStateToProps = (state) =>{
    return {
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: ()=>{
            dispatch(sendMessageCreator());
        },
        sendMessage: (body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
