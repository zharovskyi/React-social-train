import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redax/profile-reducer';
import MyPosts from './MyPosts';
import style from './MyPosts.module.css';
import Post from './Post/Post';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => { 
//     props.store.dispatch(updateNewPostActionCreator(text));
//   }

// return (
//   <MyPosts 
//     updateNewPostText={onPostChange} 
//     addPost={addPost}
//     posts = {state.profilePage.posts}
//     newPostText={state.profilePage.newPostText}
//   />
// )
// }
let mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;