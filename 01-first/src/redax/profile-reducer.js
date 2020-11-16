const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState ={
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
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 5,
                    post: state.newPostText
                }]
            }
            // state.posts.push(newPost);
            // state.newPostText = '';
            // return state;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            // state.newPostText = action.newText;
            // return state;
            default:
                return state;
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
export default profileReducer;