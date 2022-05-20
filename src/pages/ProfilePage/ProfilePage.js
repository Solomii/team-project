import React from 'react';
import style from "./style.module.scss";
import { ProfileButtonChangeAvatar } from '../../components/button/ProfileButtons/ProfileButtonChangeAvatar/ProfileButtonChangeAvatar';
import { ProfileButtonChangePassword } from '../../components/button/ProfileButtons/ProfileButtonChangePassword/ProfileButtonChangePassword';

const ProfilePage = () => {
  return (
    <div className={style.container}>
      <div className={style.boxavatartext}>
        <div className={style.avatar} >
        <img src={require("../../assets/images/profileAvatar.png")} alt="Profile Avatar" />
        <ProfileButtonChangeAvatar/>
      </div>
      <div className={style.text}>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Score</p>
        <p>Place in the ranking</p>
      </div>
      </div>
       <div className={style.btnchangepass}>
        <ProfileButtonChangePassword/>
      </div>
    </div>
  )
}

export default ProfilePage