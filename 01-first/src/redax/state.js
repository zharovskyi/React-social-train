const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MASSAGE_B0DY = 'UPDATE_NEW_MASSAGE_B0DY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: "HELOO"
                },
                {
                    id: 2,
                    post: "How are you"
                },
            ],
            newPostText: 'oleh zharovskyi'
    
        },
        messagePage: {
            dialogData: [
                {
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
            dialogMessage: [
                {
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
        },
        sidebar: [],
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State chnged')
    },
   
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_MASSAGE_B0DY) {
            this._state.messagePage.newMassageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMassageBody;
            this._state.messagePage.newMassageBody = '';
            this._state.messagePage.dialogMessage.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    }
)

export const updateNewPostActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
)
// Dialog page 
export const sendMessageCreator = () => (
    {
        type: SEND_MESSAGE
    }
)
export const updateNewMessageBodyCreator = (body) => (

    {
        type: UPDATE_NEW_MASSAGE_B0DY,
        body: body
    }
)

export default store;

window.store = store;
