import React from "react";
import pass from "../InputEmail/email.module.scss";

export const InputPassword = () => {
  return (
    <input
      type="password"
      className={`form-control ${pass.input}`}
      id="exampleInputPassword1"
      placeholder="Password"
    />
  );
};
