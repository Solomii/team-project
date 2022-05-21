import React from "react";
import mail from "../../../assets/scss/email.module.scss";

export const InputEmail = () => {
  return (
    <input
      type="email"
      className={`form-control ${mail.input}`}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Email Address..."
    />
  );
}