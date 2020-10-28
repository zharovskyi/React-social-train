import { rerenderTree } from '../render';

let state = {
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
                    ]
                },
            },
            getState() {
                return this._state;
            },
            _callSubscriber() {
                console.log('State chenged')
            },

            subscribe(observer) {
                this._callSubscriber = observer;
            },

            dispatch(action) { // {type: 'ADD-POST'}
                if (action.type === 'ADD-POST') {
                    let newPost = {
                        id: 5,
                        post: this._state.profilePage.newPostText
                    }
                    this._state.profilePage.posts.push(newPost);
                    this._state.profilePage.newPostText = '';
                    this._callSubscriber(this._state);
                } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                    this._state.profilePage.newPostText = action.newText;
                    this._callSubscriber(this._state);
                }
            }
        }

export let addPost = (postMessage) => {
            let newPost = {
                id: 5,
                post: postMessage
            }
            state.profilePage.posts.push(newPost);
            rerenderTree(state);
        }
export default store;

        window.store = store;
