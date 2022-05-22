import React from 'react'
import style from '../../../assets/scss/input.module.scss';

 const Input = ({type, placeholder, min, max}) => {
  return (
	 <input className={`form-control ${style.input}`} type={type} placeholder={placeholder} min={min} max={max}/>
  )
};

export default Input;