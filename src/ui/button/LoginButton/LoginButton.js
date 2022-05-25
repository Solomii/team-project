import React from 'react'
import styles from '../../../assets/scss/loginbutton.module.scss'

const LoginButton = ({ buttonText }) => {
  return (
    <div>
      <button type="button" className={`btn rounded-pill btn-primary ${styles.loginButton}`}>
        {buttonText}
      </button>
    </div>
  )
}
export default LoginButton
