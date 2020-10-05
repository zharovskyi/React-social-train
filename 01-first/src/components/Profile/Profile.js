import React from 'react';
import MyPosts from './My Posts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
      <div className={style.content}>
        <ProfileInfo />
        <div className={style.searchBlock}>
          <div className={style.searchInput}>
            <textarea className={style.searchButton} type='text'></textarea>
            <input className={style.sendButton} type='button' value="Send"/>
          </div>
          <MyPosts />
        </div>
      </div>
    )
}

export default Profile;