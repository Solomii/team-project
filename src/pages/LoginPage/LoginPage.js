import React from "react";
import { InputEmail } from "./../../components/input/InputEmail/InputEmail";
import { InputPassword } from "./../../components/input/InputPassword/InputPassword";
import { LoginButton } from "../../components/button/LoginButton/LoginButton";
import "bootstrap/dist/css/bootstrap.css";
import style from "./styles.module.scss";
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap"
  rel="stylesheet"
/>;

export const LoginPage = () => {
  console.log(style.img);

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
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
