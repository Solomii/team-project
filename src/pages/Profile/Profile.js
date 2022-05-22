import React from 'react';
import style from "../../assets/scss/profile.module.scss";

import { ProfileButtonChangeAvatar } from '../../ui/button/ProfileButtons/ProfileButtonChangeAvatar/ProfileButtonChangeAvatar';
import { ProfileButtonChangePassword } from '../../ui/button/ProfileButtons/ProfileButtonChangePassword/ProfileButtonChangePassword';

const Profile = () => {
  return (
    <div className={style.container}>
      <div className={style.box__avatar__text}>
        <div className={style.avatar} >
        <img src={require("../../assets/images/profileAvatar.png")} alt="Profile Avatar" class="mb-3" />
        <ProfileButtonChangeAvatar/>
      </div>
      <div className={style.text}>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Score</p>
        <p>Place in the ranking</p>
      </div>
      </div>
       <div className={style.btn__change__pass}>
        <ProfileButtonChangePassword/>
      </div>
    </div>
  )
}

export default Profile