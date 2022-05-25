import React from "react";

import style from "../../assets/scss/AddMemberForm.module.scss";

import Button from "../../ui/button/Button";
import CloseButton from "../../ui/button/CloseButton";
import Input from "../../ui/input/Input/Input";

const AddMemberForm = ({closeForm}) => {
  
  return (
    <div className={style.container}>
      <form className={style.plate}>
		    <CloseButton onClick={closeForm}/>
		  
        <div className={style.borders}>
          <h1 className={style.title}>Add Member Form</h1>

          <div className={style.element}>
            <Input type={"text"} placeholder={"First name"} />
          </div>
          <div className={style.element}>
            <Input type={"text"} placeholder={"Last name"} />
          </div>
          <div className={style.element}>
            <Input type={"email"} placeholder={"Email"} />
          </div>
          <div className={style.element}>
            <Input type={"password"} placeholder={"Password"} />
          </div>
          <div className={style.element}>
            <Input type={"date"} placeholder={"birth date"} />
          </div>
          <div className={style.element}>
            <Input type={"tel"} placeholder={"Phone number"} />
          </div>
          <div className={style.element}>
            <Input type={"text"} placeholder={"Organisation"} />
          </div>
          <div className={style.element}>
            <Input type={"number"} placeholder={"Initial score"} />
          </div>
          <div className={style.element}>
            <Button label={'Add event'} className={'btn-primary btn-block'} style={{height: '40px'}}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMemberForm;