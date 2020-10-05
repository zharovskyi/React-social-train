import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.item}>
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
        </div>
    );
}

export default ProfileInfo;