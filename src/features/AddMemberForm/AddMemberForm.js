import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase-client";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import {db} from '../../firebase-client';

import style from "../../assets/scss/AddMemberForm.module.scss";

import CloseButton from "../../ui/button/CloseButton";
import Input from "../../ui/input/Input/Input";

const AddMemberForm = ({closeForm}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [initialScore, setInitialScore] = useState('');

  const createMember = (e) => {
    e.preventDefault();
    setError('');
        
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      addDoc(collection(db, "members"), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        organisation: organisation,
        birthDate: birthDate,
        score: initialScore,
        role: 'user'
      });
      navigate('../member-management');
    })
    .catch(err => {
      setError(err.message);
      console.error(error);
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPhone('');
    setOrganisation('');
    setBirthDate('');
    setInitialScore('');
  }
  
  return (
    <div className={style.container}>
      <form className={style.plate} onSubmit={createMember} name='createUser'>
		    <CloseButton onClick={closeForm}/>
		  
        <div className={style.borders}>
          <h1 className={style.title}>Add Member Form</h1>

          <div className={style.element}>
            <Input 
              type={"text"} 
              placeholder={"First name"}
              value={firstName}
              onChange={e => setFirstName(e.target.value)} 
            />
          </div>
          <div className={style.element}>
            <Input 
              type={"text"} 
              placeholder={"Last name"}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
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
            <Input 
              type={"date"} 
              placeholder={"birth date"} 
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}  
            />
          </div>
          <div className={style.element}>
            <Input 
              type={"tel"} 
              placeholder={"Phone number"} 
              value={phone}
              onChange={e => setPhone(e.target.value)}  
            />
          </div>
          <div className={style.element}>
            <Input 
              type={"text"} 
              placeholder={"Organisation"} 
              value={organisation}
              onChange={e => setOrganisation(e.target.value)}  
            />
          </div>
          <div className={style.element}>
            <Input 
              type={"number"} 
              placeholder={"Initial score"} 
              value={initialScore}
              onChange={e => setInitialScore(e.target.value)}  
            />
          </div>
          <div className={style.element}>
            <button type="submit" style={{fontSize: "16px"}} className="btn btn-primary rounded-pill w-auto">Add new Member</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMemberForm;