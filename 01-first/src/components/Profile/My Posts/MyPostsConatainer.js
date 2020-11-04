import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redax/profile-reducer';
import MyPosts from './MyPosts';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => { 
    props.store.dispatch(updateNewPostActionCreator(text));
  }

return (
  <MyPosts 
    updateNewPostText={onPostChange} 
    addPost={addPost}
    posts = {state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />
)
}

export default MyPostsContainer;