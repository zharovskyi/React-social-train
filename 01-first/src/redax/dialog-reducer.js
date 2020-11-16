const UPDATE_NEW_MASSAGE_B0DY = 'UPDATE_NEW_MASSAGE_B0DY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Oleh',
            imgSrc: 'https://www.flaticon.com/premium-icon/icons/svg/3054/3054163.svg'
        },
        {
            id: 2,
            name: 'Andryi',
            imgSrc: 'https://image.flaticon.com/icons/png/512/3054/3054341.png'
        },
        {
            id: 3,
            name: 'Volodja',
            imgSrc: 'https://www.flaticon.com/premium-icon/icons/svg/3054/3054163.svg'
        },
        {
            id: 4,
            name: 'Sveta',
            imgSrc: 'https://www.flaticon.com/premium-icon/icons/svg/706/706807.svg'
        },
        {
            id: 5,
            name: 'Zina',
            imgSrc: 'https://www.flaticon.com/svg/static/icons/svg/921/921347.svg'
        },
        {
            id: 6,
            name: 'Bob',
            imgSrc: 'https://www.flaticon.com/premium-icon/icons/svg/2667/2667378.svg'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hi',

        },
        {
            id: 2,
            message: 'Bra',

        },
        {
            id: 3,
            message: 'Ok sdf sdf',
        },
        {
            id: 4,
            message: 'How are you',

        },
        {
            id: 5,
            message: 'Hello mate',

        },
        {
            id: 6,
            message: 'No',

        }
    ],
    newMassageBody: '',

}
const dialogReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_B0DY:
            return {
                ...state, 
                newMassageBody: action.body 
            };
           
        case SEND_MESSAGE:
            let body = state.newMassageBody;
            return {
                ...state,
                newMassageBody: '',
                messages: [...state.messages,{id: 8,message: body}],
            }
           
        default:
            return state;
    }
}
// Dialog page 
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => (
    {
        type: UPDATE_NEW_MASSAGE_B0DY,
        body: body
    }
)
export default dialogReducer;