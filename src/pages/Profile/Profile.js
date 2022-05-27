import React from 'react'
import style from '../../assets/scss/profile.module.scss'
import Button from '../../ui/button/Button'

const Profile = () => {
  return (
    <div className={style.profile__container}>
      <div className={style.profile__content}>
        <div className={style.profile__box__avatar__text}>
          <div className={style.profile__avatar}>
            <img src={require('../../assets/images/profileAvatar.png')} alt="Profile Avatar" class="mb-3" />
            <button type="button" className={`btn btn-primary w-auto`}>
              Change avatar
            </button>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <p>Place in the ranking</p>
          </div>
        </div>
        <div className={style.profile__btn__change__pass}>
          <button type="button" className={`btn btn-primary w-auto`}>
            Change password
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
