import React, {useState} from "react";

import {useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase-client";
import Input from '../../ui/input/Input'

<<<<<<< HEAD
import style from "../../assets/scss/login.module.scss";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
          navigate('/home');
      })
      .catch(err => {
        setError(err.message);
        console.error(error);
      });  
  }
  
=======
import style from '../../assets/scss/login.module.scss'
import Button from '../../ui/button/Button'

const Login = () => {
>>>>>>> main
  return (
    <div className={style.container}>
      <div className={style.plate}>
        <div className={style.img}> </div>
        <form className={style.form}>
          <div class={style.border}>
            <h2 className={style.title}>Welcome!</h2>
            <div className={style.element}>
              <Input 
                type={"email"} 
                placeholder={"Email"} 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={style.element}>
              <Input 
                type={"password"} 
                placeholder={"Password"} 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className={style.element}>
<<<<<<< HEAD
              <button 
                type="button" 
                style={{fontSize: "18px"}} 
                className="btn btn-primary rounded-pill w-auto"
                onClick={signIn}
              >
                &nbsp;&nbsp;&nbsp; Sign In &nbsp;&nbsp;&nbsp;
              </button>
=======
              <Button label={'Login'} className={'btn-sm btn-primary btn-block'} style={{ height: '50px' }} />
>>>>>>> main
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
