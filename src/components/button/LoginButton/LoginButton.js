import React from "react";
import styles from "./styles.module.scss";

export const LoginButton = () => {
  return (
    <div>
      <button type="button" className={`btn btn-primary ${styles.loginButton}`}>
        Login
      </button>
    </div>
  );
};
