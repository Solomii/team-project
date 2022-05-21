import React from "react";
import styles from "../../../assets/scss/loginbutton.module.scss";

export const LoginButton = ({ buttonText }) => {
  return (
    <div>
      <button type="button" className={`btn btn-primary rounded-pill btn-lg fs-6 ${styles.loginButton}`}>
        {buttonText}
      </button>
    </div>
  );
}