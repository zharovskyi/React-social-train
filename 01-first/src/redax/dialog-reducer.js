const UPDATE_NEW_MASSAGE_B0DY = 'UPDATE_NEW_MASSAGE_B0DY';
const SEND_MESSAGE = 'SEND_MESSAGE';

 const dialogReducer = (state,action) => {
    switch(action.type){
        case UPDATE_NEW_MASSAGE_B0DY:
            state.newMassageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMassageBody;
            state.newMassageBody = '';
            state.dialogMessage.push({id: 8, message: body});
            return state;
        default:
            return state;
    }
}
// Dialog page 
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => (

    {
        type: UPDATE_NEW_MASSAGE_B0DY,
        body: body
    }
)
export default dialogReducer;