import React from "react";
import InputEmail from "../../ui/input/InputEmail";
import InputPassword from "../../ui/input/InputPassword";

import style from '../../assets/scss/login.module.scss'
import Button from '../../ui/button/Button'

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.plate}>
        <div className={style.img}> </div>
        <div className={style.form}>
          <div class={style.border}>
            <h2 className={style.title}>Welcome back!</h2>

            <div className={style.element}>
              <InputEmail />
            </div>

            <div className={style.element}>
              <InputPassword />
            </div>

            <div className={style.element}>
              <Button label={'Login'} className={'btn-sm btn-primary btn-block'} style={{ height: '50px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
