import React from 'react';
import MyPostsContainer from './My Posts/MyPostsConatainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer
        store = {props.store}
      />
    </div>
  )
}

export default Profile;