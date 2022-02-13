import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import MainMenu from '../MainMenu/mainMenu';
import './login.scss';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmitFirstName = (evt) => {
    setFirstName(evt.target.value);
  };

  const handleSubmitLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleSubmitEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubmitId = (evt) => {
    setId(evt.target.value);
  };

  const handleSubmitNumberPhone = (evt) => {
    setPhoneNumber(evt.target.value);
  };

  return (
    <div>
      <h1>Administration System</h1>
      <h2>Login</h2>
      <h3>Please complete the following fields to begin:</h3>
      <div class="fields">
        <div class="inputs">
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={handleSubmitFirstName}
          />
        </div>
        <div class="inputs">
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={handleSubmitLastName} />
        </div>
        <div class="inputs">
          <label>Email: </label>
          <input type="text" value={email} onChange={handleSubmitEmail} />
        </div>
        <div class="inputs">
          <label>Id: </label>
          <input type="text" value={id} onChange={handleSubmitId} />
        </div>
        <div class="inputs">
          <label>Phone Number: </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handleSubmitNumberPhone}
          />
        </div>
        <button type="submit" disabled={!isEnabled} exact component={MainMenu}>
          Submit
        </button>
        <BrowserRouter>
          <NavLink to="/signUp">Sign Up</NavLink>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Login;
