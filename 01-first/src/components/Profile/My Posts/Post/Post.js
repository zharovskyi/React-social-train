import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
          <img src='https://st2.depositphotos.com/2872743/10119/i/950/depositphotos_101190820-stock-photo-cartoon-mustache-face-cute-emoticon.jpg' alt='Avatar' />
            {props.message}
        </div>
    );
}

export default Post;