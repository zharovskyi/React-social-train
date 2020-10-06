import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(
    post => <Post message={post.post}/>
  )
    return (
    <div className={style.postBlock}>
      My Posts
        <div>
          New Posts
        </div>
        <div className={style.posts}>
          {postsElement}
        </div>
        <div className={style.searchBlock}>
          <div className={style.searchInput}>
            <textarea className={style.searchButton} type='text'></textarea>
            <input className={style.sendButton} type='button' value="Send"/>
          </div>
        </div>
    </div>
    )
}

export default MyPosts;