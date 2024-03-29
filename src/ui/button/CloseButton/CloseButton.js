import React from 'react'
import style from '../../../assets/scss/closeButton.module.scss'

const CloseButton = ({ onClick }) => {
  return <button className={style.close} onClick={onClick}></button>
}

export default CloseButton
