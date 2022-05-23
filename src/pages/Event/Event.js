/* eslint-disable react/style-prop-object */
import React from 'react';

import style from "../../assets/scss/event.module.scss";

import { SmallButton } from "../../ui/button/SmallButton/SmallButton";

const Event = () => {
  return (
    <div className={style.container}>
      <div className={style.box__text}>
        <div >
          <p>Event Name: Math Lecture</p>
          <p>Date: 02.20.2022</p>
          <p>Score: 14</p>
          <p>Participants:</p>
        </div>
         <div className={style.box__btn}>
        <div>
          <SmallButton buttonText={"Add Coment"} />
        </div>
        <div>
          <SmallButton buttonText={"Add Addition comment"}/>
        </div>
      </div>
      </div>
        <div class="p-1">
          <div className={style.box__list}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <div className={style.div__img}><img src={require("../../assets/images/eventAvatar.png")} alt="Profile Avatar" /></div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <SmallButton   buttonText={"Comment"} />
            </div> 
          <div className={style.box__list}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <div className={style.div__img}><img src={require("../../assets/images/eventAvatar.png")} alt="Profile Avatar" /></div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <SmallButton   buttonText={"Comment"} />
            </div> 
          <div className={style.box__list}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <div className={style.div__img}><img src={require("../../assets/images/eventAvatar.png")} alt="Profile Avatar" /></div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <SmallButton   buttonText={"Comment"} />
          </div> 
      </div>
    </div>
  )
}

export default Event;