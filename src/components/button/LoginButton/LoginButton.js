import React from "react";
import styles from "./styles.module.scss";


export const LoginButton = ({ buttonText }) => {
  return (
    <div>
      <button type="button" className={`btn btn-primary ${styles.loginButton}`}>
        {buttonText}
      </button>
    </div>
  );
};
