import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div className={style.postBlock}>
      My Posts
        <div>
          New Posts
        </div>
        <div className={style.posts}>
          <Post message='Hello, how are you'/>
          <Post message='It is my post'/>

        </div>
    </div>
    )
}

export default MyPosts;