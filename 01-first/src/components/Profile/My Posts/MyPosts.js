import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(
    post => <Post message={post.post} />
  )

  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;
    props.addPost(text);
  }

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
          <textarea ref={newPostElement} className={style.searchButton} type='text'></textarea>
          <button onClick={addPost} className={style.sendButton} type='button' value="Send">Add Post</button>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;