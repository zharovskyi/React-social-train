import React from 'react';
import MyPosts from './My Posts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return <div className={style.content}>
    <div className={style.contentImg}>
      <img className={style.contentImgLogo} src="https://images.freeimages.com/images/large-previews/43f/beach-1408077.jpg" alt="logo"/>
    </div>
    <div className={style.contnetAbout}>
      <img className={style.aboutFoto} src='https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477_960_720.png' alt='Logo'/>
      <div className={style.aboutContent}>
        <h2 className={style.abouName}>Name: Vasyl Pupkin</h2>
        <p className={style.aboutDate}>Date of Birth</p>
        <p className={style.aboutCity}>City: Ivano-Frankivsk</p>
        <p className={style.aboutEducation}>Education: IFTUOG</p>
        <p className={style.aboutInfo}>Web-site: www.oleh.ua</p>
      </div>
    </div>
    <div className={style.searchBlock}>
    <div className={style.searchInput}>
      <input className={style.searchButton} type='text'/>
      <input className={style.sendButton} type='button' value="Send"/>
    </div>
    <MyPosts />
  </div>
  </div>
}

export default Profile;