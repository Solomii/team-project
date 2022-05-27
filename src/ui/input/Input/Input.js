import React from 'react'
import style from '../../../assets/scss/input.module.scss'

<<<<<<< HEAD
 const Input = ({type, placeholder, value, onChange, min, max}) => {
  return (
	 <input 
    className={`form-control ${style.input}`} 
    type={type} 
    value={value}
    placeholder={placeholder}
    onChange={onChange} 
    required
    min={min} 
    max={max}/>
  )
};
=======
const Input = ({ type, placeholder, min, max }) => {
  return <input className={`form-control ${style.input}`} type={type} placeholder={placeholder} min={min} max={max} />
}
>>>>>>> main

export default Input
