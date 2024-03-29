
import React from 'react';

import style from "../../assets/scss/event.module.scss";
import Button from '../../ui/button/Button';

const Event = () => {
  return (
    <div className={style.event__container}>
      <div className={style.event__box__text}>
        <div >
          <p>Event Name: Math Lecture</p>
          <p>Date: 02.20.2022</p>
          <p>Score: 14</p>
          <p>Participants:</p>
        </div>
         <div className={style.event__box__btn}>
        <div  style={{marginRight:"40px"}}>
          <Button label={'Add Comment'} className={'btn-primary btn-sm'}/>
        </div>
        <div style={{marginRight:"40px"}}>
        <Button label={'Add Addition Comment'} className={'btn-primary btn-sm'}/>
        </div>
      </div>
      </div>
        <div class="p-1">
          <div className={style.event__box__list}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <div className={style.event__box__img}><img src={require("../../assets/images/eventAvatar.png")} alt="Profile Avatar" /></div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <Button label={'Comment'} className={'btn-primary btn-sm'}/>
            </div> 
          <div className={style.event__box__list}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <div className={style.event__box__img}><img src={require("../../assets/images/eventAvatar.png")} alt="Profile Avatar" /></div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <Button label={'Comment'} className={'btn-primary btn-sm'}/>
            </div> 
          <div className={style.event__box__list}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <div className={style.event__box__img}><img src={require("../../assets/images/eventAvatar.png")} alt="Profile Avatar" /></div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Score</p>
            <Button label={'Comment'} className={'btn-primary btn-sm'}/>
          </div> 
      </div>
    </div>
  )
}

export default Event
